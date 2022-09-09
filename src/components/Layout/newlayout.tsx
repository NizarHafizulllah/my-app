
import Head from "next/head"
import Footer from "../footer"
import Navbar from "../Navbar"

const NewLayout = ({...props}) => {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen font-Patrick text-white lg:px-10">
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default NewLayout