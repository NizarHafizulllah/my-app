import { useState } from 'react';
import Container from '../../components/container';
import CardPost from '../../components/FeaturePost/cardpost';
import MainPost from '../../components/FeaturePost/mainpost';
import NewLayout from '../../components/Layout/newlayout';
import postData from '../../../utils/post.json';

const Home = () => {
  const [posts, setPost] = useState(postData);

  return (
    <NewLayout title="Epictus | Home">
      <Container>
        <MainPost />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="lg:w-4/12 md:w-6/12 w-full px-4 py-6 cursor-pointer"
            >
              <CardPost
                thumbnail={post.thumbnail}
                content={{
                  title: {
                    title: post.title,
                    category: post.category,
                    center: false,
                    date: post.date,
                  },
                  author: {
                    authorAvatar: post.authorAvatar,
                    authorJob: post.authorJob,
                    authorName: post.authorJob,
                  },
                  description: post.shortDescription,
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </NewLayout>
  );
};

export default Home;
