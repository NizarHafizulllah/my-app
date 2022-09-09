
interface PostTitleProps{
    category: string,
    date: string,
    title: string
    center: boolean
}

export default function PostTitle(props: PostTitleProps){
    return (
        <>
            <div className="flex items-center text-white/60 space-x-4">
                    <div className="uppercase">
                        {props.category}
                    </div>
                    <span>&bull;</span>
                    <div>{props.date}</div>
                </div>
            <h2 className={`text-2xl mt-4 ${props.center ? 'text-center' : ''}`}>{props.title}</h2>
        </>
    )

}