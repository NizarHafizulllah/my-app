import PostAuthor from "./postauthor"
import PostTitle from "./posttitle"



const ContentPost = ({...props}) => {
    return (
        <>
            <PostTitle center={false} category={props.category} date={props.date} title={props.title} />
            <p className="text-white/60 mt-4 w-10/12 tracking-wide">{props.shortDescription} </p>
            <PostAuthor 
                authorAvatar={props.authorAvatar}
                authorName={props.authorName}
                authorJob={props.authorJob}
            /> 
        </>
    )
}

export default ContentPost