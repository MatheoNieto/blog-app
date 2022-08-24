import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Container, Typography} from '@mui/material';
import {Layout} from '../../components/Layout';

const Article: NextPage = () => {
  const router = useRouter();
  const {articleId} = router.query;

  return (
    <>
      <Layout titleHeader="title article">
        <Container maxWidth="md">
          <Typography component="h1">Title</Typography>
          <Typography>Title</Typography>
        </Container>
      </Layout>
    </>
  );
};

export default Article;
