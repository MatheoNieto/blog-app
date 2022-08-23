import type {NextPage} from 'next';
import {Typography, AppBar, Container, Box} from '@mui/material';
import {makeStyles} from './Home.styles';

const Home: NextPage = () => {
  return (
    <>
      <AppBar component="nav">
        <Box sx={makeStyles.contentHeader}>
          <Typography variant="h6" component="div" sx={makeStyles.titleHeader}>
            Welcome to favorite blog
          </Typography>
        </Box>
      </AppBar>
      <Box component="main" sx={{p: 3}}></Box>
    </>
  );
};

export default Home;
