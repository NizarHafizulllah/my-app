import { ReactNode } from "react"

interface CardProps{
    children: ReactNode;
    title: string;
}

const CardContent = (props: CardProps) => {
    const {children, title} = props;

    return (
        <figure className="bg-black/60 rounded-xl backdrop-blur-2 m-3 shadow-md shadow-black">
            <div className="shadow-lg">
                <div className="text-xl text-white font-sans font-bold px-8 py-3">{title}</div>
            </div>
            <div className="py-4 px-5 bg-black/30 rounded-b-lg text-white backdrop-blur-2">
                {children}
            </div>
        </figure>
    )
}

export default CardContent