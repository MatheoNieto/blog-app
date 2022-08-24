import type {NextPage} from 'next';
import {Typography} from '@mui/material';
import {Layout} from '../components/Layout';

const NotFound: NextPage = () => {
  return (
    <>
      <Layout titleHeader="Page not found" createPost={true}>
        <Typography component="h1" sx={{textAlign: 'center'}}>The page do not exist</Typography>
      </Layout>
    </>
  );
};

export default NotFound;
