import { ReactNode } from "react"
import Header from "../Header/header"

interface LayoutProps {
    children: ReactNode;
    title: string
}

const Layout = (props: LayoutProps) => {

    const {children, title} = props;

    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
            <Header  title={title}></Header>
            <div className="mx-5 mt-3 items-stretch">
                {children}
            </div>
        </div>
    )   
}

export default Layout