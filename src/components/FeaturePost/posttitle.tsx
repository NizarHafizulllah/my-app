import { PostTitleProps } from '../../../interface';

interface PostProps {
  post: PostTitleProps;
}

export default function PostTitle({ post }: PostProps) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{post.category}</div>
        <span>&bull;</span>
        <div>{post.date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${post.center ? 'text-center' : ''}`}>
        {post.title}
      </h2>
    </>
  );
}
