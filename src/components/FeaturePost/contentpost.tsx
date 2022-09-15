import {
  ContentProps,
  PostAuthorProps,
  PostTitleProps,
} from '../../../interface';
import PostAuthor from './postauthor';
import PostTitle from './posttitle';

const ContentPost = ({ author, description, title }: ContentProps) => {
  return (
    <>
      <PostTitle post={title} />
      <p className="text-white/60 mt-4 w-10/12 tracking-wide">{description} </p>
      <PostAuthor {...author} />
    </>
  );
};

export default ContentPost;
