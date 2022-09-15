export type PostTitleProps = {
    category: string,
    date: string,
    title: string
    center: boolean
}

export type PostAuthorProps = {
    authorAvatar: string,
    authorName: string,
    authorJob: string,
}

export type ContentProps = {
    title: PostTitleProps
    author: PostAuthorProps
    description: string
}


export type CardProps = {
    content: ContentProps
    thumbnail: string
}