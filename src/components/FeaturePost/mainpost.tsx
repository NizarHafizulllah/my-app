import Image from "next/image"
import ContentPost from "./contentpost"

const MainPost = () => {
    return (
        <article>
            <div className="flex -mx-4 items-center flex-wrap">
                <div className="lg:w-8/12 w-full px-4">
                    <img src="/featured-thumbnail.png" alt="Main Post" className="rounded-xl w-full" />
                </div>
                <div className="lg:w-4/12 w-full px-4 sm:py-4">
                    <ContentPost 
                        category="UI Design"
                        date="July 2, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
                        authorName="Leslie Alexander"
                        authorJob="UI Designer"
                        authorAvatar="/author-1.png"
                    />
                </div>
            </div>
        </article>
    )
}


export default MainPost