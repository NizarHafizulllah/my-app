
interface postAuthorProps{
    authorAvatar: string,
    authorName: string,
    authorJob: string,
}

export default function PostAuthor(props: postAuthorProps){
    return (
        <>
            <div className="flex items-center mt-4">
                <img src={props.authorAvatar} alt="" className="w-14 h-14 rounded-full object-cover" />
                <div className="ml-4">
                    <h3>{props.authorName}</h3>
                    <div className="text-white/60 text-sm mt-1">{props.authorJob}</div>
                </div>
            </div>
        </>
    )
}
