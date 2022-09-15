import Container from '../../components/container';
import NewLayout from '../../components/Layout/newlayout';
import SectionHeader from '../../components/sectionheader';
import ButtonAction from '../../components/Table/buttonaction';
import Table from '../../components/Table/table';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import NavbarSamping from '../../components/Modal/navbarsamping';
import CardContent from '../../components/Card/cardcontent';
import FormUser from '../../components/Form/formuser';

const PostLiveRefresh = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);
  const [dataPost, setDataPost] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [footerData, setFooterData] = useState({
    start: 0,
    end: 10,
    total: 99999,
    page: 1,
  });

  const collumns = [
    {
      field: 'id',
      label: 'ID',
      size: 'w-1/12',
      extendClassHeader: 'align-text-top',
      extendClassBody: 'align-text-top',
    },
    {
      field: 'title',
      label: 'Title',
      size: 'w-3/12',
      extendClassHeader: '',
      extendClassBody: 'align-text-top',
    },
    {
      field: 'body',
      label: 'Body',
      size: 'w-6/12',
      extendClassHeader: '',
      extendClassBody: 'align-text-top',
    },
    {
      field: 'action',
      label: 'Action',
      size: 'w-2/12',
      extendClassHeader: 'text-center',
      extendClassBody: 'align-text-top text-center',
    },
  ];

  // option 2
  async function getData() {
    setLoading(true);
    let page = pageNumber;
    const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * 10;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10&_delay=2000`;
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    let dataPost;

    dataPost = responseData.map((row: any) => {
      var button = (
        <ButtonAction
          label={`Detail ${row.id}`}
          action={() => {
            setIsOpen(true);
          }}
        />
      );

      return {
        id: row.id,
        title: row.title,
        body: row.body,
        action: button,
      };
    });

    setDataPost(dataPost);

    setFooterData({
      start: start + 1,
      end: start + responseData.length,
      total: 100,
      page: +pageNumber,
    });
  }

  useEffect(() => {
    getData().then(() => {
      // setTimeout(() => setLoading(false), 2000);
      setLoading(false);
    });
  }, [pageNumber]);

  return (
    <NewLayout title="Epictus | Pengguna">
      <Container>
        <SectionHeader title="Post Table" />

        <NavbarSamping isOpen={isOpen} close={() => setIsOpen(false)}>
          <FormUser />
        </NavbarSamping>

        <Table
          title="Table Post"
          description="Tabel ini menampilkan data postingan yang sudah diinput"
          columData={collumns}
          dataContent={dataPost}
          isFooter={true}
          footerData={{
            next: () => {
              console.log('tombol next');
              setPageNumber(pageNumber + 1);
            },
            prev: () => {
              console.log('tombol prev');
              setPageNumber(pageNumber - 1);
            },
            start: footerData.start,
            end: footerData.end,
            total: footerData.total,
          }}
          isLoading={isLoading}
        />
      </Container>
    </NewLayout>
  );
};

export default PostLiveRefresh;
