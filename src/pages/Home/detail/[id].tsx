import { useRouter } from 'next/router';
import PostTitle from '../../../components/FeaturePost/posttitle';
import postData from '../../../../utils/post.json';
import NewLayout from '../../../components/Layout/newlayout';
import Container from '../../../components/container';
import PostAuthor from '../../../components/FeaturePost/postauthor';

interface PostProps {
  id: number;
  thumbnail: string;
  category: string;
  date: string;
  title: string;
  shortDescription: string;
  authorAvatar: string;
  authorName: string;
  authorJob: string;
}

interface PostDetailProps {
  post: PostProps;
}

const Detail = (props: PostDetailProps) => {
  const router = useRouter();

  const post = props.post;

  return (
    <NewLayout title="Epictus | Detail">
      <Container>
        <div className="lg:w-6/12 mx-auto flex items-center flex-col">
          <PostTitle
            post={{
              center: true,
              category: post.category,
              date: post.date,
              title: post.title,
            }}
          />
          <PostAuthor
            authorAvatar={post.authorAvatar}
            authorName={post.authorName}
            authorJob={post.authorJob}
          />
        </div>
        <div className="lg:w-10/12 mx-auto my-10">
          <img
            src={post.thumbnail}
            className="w-full rounded-lg shadow-md"
            alt=""
          />
        </div>
        <div className="lg:w-8/12 mx-auto leading-relaxed space-y-5">
          <p>{post.shortDescription}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            sint ut voluptatum officiis sed sequi saepe nulla velit perspiciatis
            mollitia nemo consequuntur ipsa atque, minima vitae neque placeat.
            Ad, quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            doloribus possimus voluptates mollitia ipsa deleniti vel reiciendis?
            Quod enim explicabo quas est, omnis debitis adipisci nulla. Quia
            repellendus dignissimos laborum?
          </p>
        </div>
        <div className="py-10 cursor-pointer">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-white/20 hover:bg-white/10 px-10 py-2 rounded-md shadow-lg flex mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Go Back
          </button>
        </div>
      </Container>
    </NewLayout>
  );
};

export default Detail;

export async function getStaticPath() {
  const paths = postData.map((post: PostProps) => ({
    params: {
      id: `${post.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
interface getStaticProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps(context: getStaticProps) {
  const { id } = context.params;
  var elementPos = postData
    .map(function (x) {
      return x.id;
    })
    .indexOf(Number(id));

  const post = postData[elementPos];

  return {
    props: {
      post,
    },
  };
}
