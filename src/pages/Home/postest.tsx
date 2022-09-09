
import { useState } from "react";
import Container from "../../components/container";
import CardPost from "../../components/FeaturePost/cardpost";
import NewLayout from "../../components/Layout/newlayout";
import postData from "../../../utils/post.json";
import SectionHeader from "../../components/sectionheader";
import Link from "next/link";


interface PostProps{
    dataPost: Array<any>;
}

const Postest = (props: PostProps) =>  {
    // const [posts, setPost] = useState(postData);
    const post = props.dataPost

    return (
       <NewLayout title="Epictus | UI Design">
            <Container>
                <SectionHeader title="UI DESIGN" />
                {props.dataPost.length ? (
                   <div className="flex -mx-4 flex-wrap mt-6">
                        {post.map((post, index) => (
                            <Link key={post.id} href={`/Home/detail/${post.id}`}>
                                <div className="lg:w-4/12 md:w-6/12 w-full px-4 py-6 cursor-pointer">
                                    <CardPost {...post}/>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-5xl">No result</h2>
                        <p className="text-xl mt-4 text-white/60 md:w-8/12 mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
                    </div>
                )}
            </Container>
        </NewLayout>
    )
}

export default Postest

export async function getStaticProps(){
    return {
        props: {
            dataPost: postData,
        }
    }
}