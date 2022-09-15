import type { NextPage } from 'next';
import Card from '../components/Card/card';
import CardContent from '../components/Card/cardcontent';
import Button from '../components/Form/button';
import Layout from '../components/Layout/layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-row">
        <div className="flex-1">
          <CardContent title="Button" description="Element">
            <div className="grid-flow-row">
              <Button name="Home" type="primary" fungsi={() => {}}></Button>
              <Button name="Danger" type="danger" fungsi={() => {}}></Button>
              <Button name="Info" type="info" fungsi={() => {}}></Button>
              <Button name="Warning" type="warning" fungsi={() => {}}></Button>
              <Button name="Default" type="default" fungsi={() => {}}></Button>
            </div>
          </CardContent>
        </div>
      </div>

      <div className="grid">
        <div className="grid-flow-row">
          <div className="flex">
            <div className="flex-1 mx-2">
              <Card />
            </div>
            <div className="flex-1 mx-2">
              <Card />
            </div>
            <div className="flex-1 mx-2">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
