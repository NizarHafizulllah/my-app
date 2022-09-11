
import Head from "next/head"
import { ReactNode } from "react"
import Footer from "../footer"
import Navbar from "../Navbar"

interface LayoutProps{
    title: string,
    children: ReactNode
}

const NewLayout = (props: LayoutProps) => {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen font-Patrick text-white lg:px-10">
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar/>
                {props.children}
            <Footer />
        </div>
    )
}

export default NewLayout