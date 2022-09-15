import { PostAuthorProps } from '../../../interface';

export default function PostAuthor(data: PostAuthorProps) {
  return (
    <>
      <div className="flex items-center mt-4">
        <img
          src={data.authorAvatar}
          alt=""
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3>{data.authorName}</h3>
          <div className="text-white/60 text-sm mt-1">{data.authorJob}</div>
        </div>
      </div>
    </>
  );
}
