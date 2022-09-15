import React, { useEffect, useState } from 'react';
import Container from '../../components/container';
import NewLayout from '../../components/Layout/newlayout';
import SectionHeader from '../../components/sectionheader';
import { Editor } from '@tinymce/tinymce-react';
import CardContent from '../../components/Card/cardcontent';
import FormUser from '../../components/Form/formuser';

const ElementPage = () => {
  const [keterangan, setKeterangan] = useState('');

  return (
    <NewLayout title="Epictus | Element">
      <Container>
        <SectionHeader title="Element" />
        <CardContent title="Input Form" description="Element Input Form">
          <FormUser />
        </CardContent>

        <Editor
          id="tinymce_id"
          apiKey="kvjax695zke32ewpfhyogqdqywy05ij22fl04ho64nvkxssg"
          onEditorChange={(editor) => {
            setKeterangan(editor);
          }}
          plugins="lists advlist code image table pagebreak print"
          init={{
            indentation: '20pt',
            indent_use_margin: true,
            height: 500,
            menubar: false,
            object_resizing: 'true',
            formats: {
              p: { block: 'p', styles: { 'text-indent': '-28px' } },
            },
            language: 'id',
            menuBar: 'file`',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            toolbar:
              'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | pagebreak table image print | help',
          }}
        />
        <div
          className="unreset mt-10 p-2 bg-white text-black max-h-screen overflow-auto"
          dangerouslySetInnerHTML={{ __html: keterangan }}
        />
      </Container>
    </NewLayout>
  );
};

export default ElementPage;
