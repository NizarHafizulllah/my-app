import Head from "next/head";
import Container from "../../components/container";
import NewLayout from "../../components/Layout/newlayout";
import SectionHeader from "../../components/sectionheader";

export default function Page404(){
    return (
        <NewLayout title="Epictus | Home">
            <Container>
                <SectionHeader title="UI DESIGN" />
                <div className="flex -mx-4 flex-wrap mt-6">
                    Hello
                </div>
            </Container>
        </NewLayout>
    )
}