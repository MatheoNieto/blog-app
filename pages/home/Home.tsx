import type {NextPage} from 'next';
import {Typography, AppBar, Box, Grid} from '@mui/material';
import {makeStyles} from './Home.styles';
import {Card} from './components/Card';
import {data} from './mock/articles';

const Home: NextPage = () => {
  const renderArticles = () => {
    return data.map((article, index) => (
      <Card key={`${article.id}-${index}`} article={article} />
    ));
  };

  return (
    <>
      <AppBar component="nav">
        <Box sx={makeStyles.contentHeader}>
          <Typography variant="h6" component="div" sx={makeStyles.titleHeader}>
            Welcome to favorite blog
          </Typography>
        </Box>
      </AppBar>
      <Box component="div" sx={makeStyles.contentBody}>
        <Grid container> {renderArticles()}</Grid>
      </Box>
    </>
  );
};

export default Home;
