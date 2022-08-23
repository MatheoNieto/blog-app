import type {NextPage} from 'next';
import {Box, Grid} from '@mui/material';
import {makeStyles} from './Home.styles';
import {Card} from './components/Card';
import {data} from './mock/articles';
import {Header} from '../../components/Header';

const Home: NextPage = () => {
  const renderArticles = () => {
    return data.map((article, index) => (
      <Card key={`${article.id}-${index}`} article={article} />
    ));
  };

  return (
    <>
      <Header title="Welcome to favorite blog" createPost={true} />
      <Box component="div" sx={makeStyles.contentBody}>
        <Grid container> {renderArticles()}</Grid>
      </Box>
    </>
  );
};

export default Home;
