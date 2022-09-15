import { CardProps } from '../../../interface';
import ContentPost from './contentpost';

const CardPost = ({ content, thumbnail }: CardProps) => {
  return (
    <article>
      <img src={thumbnail} className="w-full rounded mb-4" alt="" />
      <ContentPost
        author={content.author}
        description={content.description}
        title={content.title}
      />
    </article>
  );
};

export default CardPost;
