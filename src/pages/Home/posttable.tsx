import { useState, useEffect } from "react";
import Container from "../../components/container"
import NewLayout from "../../components/Layout/newlayout"
import SectionHeader from "../../components/sectionheader"
import ButtonAction from "../../components/Table/buttonaction";
import Table from "../../components/Table/table";
import { useRouter } from "next/router"
import { start } from "repl";




const PostTable= (data: any) => {

    const {post, start, end, total, page} = data

    const router = useRouter();

    // const [userData, setUserData] = useState();
    // const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const collumns = [
        {
            field: "id",
            label: "ID",
            size: 'w-1/12',
            extendClassHeader: 'align-text-top',
            extendClassBody: 'align-text-top'
        },
        {
            field: "title",
            label: "Title",
            size: 'w-3/12',
            extendClassHeader: '',
            extendClassBody: 'align-text-top'
        },
        {
            field: "body",
            label: "Body",
            size: 'w-6/12',
            extendClassHeader: '',
            extendClassBody: 'align-text-top'
        },
        {
            field: "action",
            label: "Action",
            size: 'w-2/12',
            extendClassHeader: 'text-center',
            extendClassBody: 'align-text-top text-center'
        }];


    let dataPost
    
    // option 1
    // function pullJson(){
    //      fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(responseData => {
    //         console.log(responseData);
    //         dataUsers = responseData.map((row: any) => {
    //             return (
    //                 <p key={row.id}>{row.title}</p>
    //             )
    //         })

    //         setUserData(dataUsers)
    //     });
    // }


    // option 2
//    async function pullJson() {
    
//         const response = await fetch(apiUrl);
//         const responseData = await response.json()
//         console.log(responseData);
//         dataUsers = responseData.map((row: any) => {
//                         return (
//                             <p className="text-center" key={row.id}>{row.title}</p>
//                         )
//                     })
        
//         setUserData(dataUsers)
//    }

    dataPost = post.map((row: any) => {

        var button = <ButtonAction label={`Detail ${row.id}`} action={() => { console.log(`${row.id}`)} } />

        return {
            id: row.id,
            title: row.title,
            body: row.body,
            action: button

        }
    })


    return (
        <NewLayout title="Epictus | Pengguna">
            <Container>
                <SectionHeader title="Post Table" />
                
                <Table 
                    title="Table Post" 
                    description="Tabel ini menampilkan data postingan yang sudah diinput" 
                    columData={collumns} 
                    dataContent={dataPost} 
                    isFooter={true} 
                    footerData={{ 
                        next: () => {
                            router.push(`/Home/posttable?page=${page + 1}`)
                        }, 
                        prev: () => {
                            router.push(`/Home/posttable?page=${page - 1}`)
                        }, 
                        start: start,
                        end: end,
                        total: total
                    }}
                    isLoading={false}
                />
            </Container>
        </NewLayout>
    )
}

export default PostTable



export async function getServerSideProps({query: {page = 1}}){
    
    const start = +page === 1 ? 0 : (+page - 1) * 10

    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`;
    const response = await fetch(apiUrl);
    const responseData = await response.json()
    const end = start + responseData.length

    return {
        props: {
            post: responseData,
            start: (start+1),
            end: end,
            total: 30,
            page: +page
        }
    }
}