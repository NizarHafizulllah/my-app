import ContentPost from "./contentpost"

const CardPost = ({ ...infoPost}) => {
    return (
        <article>
            <img src={infoPost.thumbnail} className="w-full rounded mb-4" alt="" />
            <ContentPost  {...infoPost} />
        </article>
    )
}

export default CardPost