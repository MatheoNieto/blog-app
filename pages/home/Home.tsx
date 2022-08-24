import type {NextPage} from 'next';
import {Grid} from '@mui/material';

import {Card} from './components/Card';
import {data} from './mock/articles';
import {Layout} from '../../components/Layout';

const Home: NextPage = () => {
  const renderArticles = () => {
    return data.map((article, index) => (
      <Card key={`${article.id}-${index}`} article={article} />
    ));
  };

  return (
    <>
      <Layout titleHeader="Welcome to favorite blog" createPost={true}>
        <Grid container> {renderArticles()}</Grid>
      </Layout>
    </>
  );
};

export default Home;
