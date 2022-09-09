import Link from "next/link";
import { useState } from "react"
import Container from "./container";



const Navbar = () => {

    const [offCanvas, setOffCanvas] = useState(false);
    const [dropddown, setDropdown] = useState(false);
    const [search, setSearch] = useState(false);
    const subMenuList = [
        { text: 'Internet', href: '#' },
        { text: 'Books', href: '#' },
        { text: 'Open Source', href: '#' }
    ];

    
    return (
        <nav className="py-10">
            <Container>
                    <div className="flex items-center">
                        <div className="w-3/12 lg:hidden">
                            <button type="button" onClick={() => setOffCanvas(!offCanvas) }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <Link href="/Home/home">
                            <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
                                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">E</div>
                                Epictus
                            </div>
                        </Link>
                        <div className="w-3/12 lg:hidden text-right">
                            <button type="button" onClick={() => setSearch(!search) }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                        <div className={`lg:w-7/12 w-full bg-gradient-to-b from-slate-600 to-slate-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offCanvas ? 'left-0' : '-left-full'}`}>
                            <button type="button" className="lg:hidden absolute top-10 right-10" onClick={() => setOffCanvas(false) }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                                <Link href="/Home/postest"><li><a href="#!" className="hover:underline">UI Design</a></li></Link>
                                <Link href="/Home/postest"><li><a href="#!" className="hover:underline">Front-End</a></li></Link>
                                <li><a href="#!" className="hover:underline">Back-End</a></li>
                                <li className="relative">
                                    <a href="#!" className="hover:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropddown)}>
                                        Lainnya 
                                        <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a> 
                                    {dropddown && (
                                    <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                                        {
                                            subMenuList.map((row, index) => 
                                                <li key={index} ><a href={row.href} className="flex py-3 px-3 border-b border-white/5 hover:bg-slate-900 rounded">{row.text}</a></li>
                                            )
                                        }
                                    </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className={`lg:static absolute w-full left-0 px-10 lg:px-0 lg:w-3/12 transition-all ${search ? 'top-10' : '-top-40'}`}>
                            <input type="text" className="bg-gray-700 py-2 px-4 w-full lg:rounded-full rounded-lg bg-search pl-12 focus:outline-none caret-white" placeholder="Search.." />
                            <button type="button" className="lg:hidden absolute top-2 right-12" onClick={() => setSearch(false) }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Container>
            </nav>
    )
}

export default Navbar