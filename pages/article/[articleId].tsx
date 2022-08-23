import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Box, Container, Typography} from '@mui/material';
import {Header} from '../../components/Header';

const Article: NextPage = () => {
  const router = useRouter();
  const {articleId} = router.query;

  return (
    <>
      <Header title="title article" />
      <Container maxWidth="md">
        <Box component="div" sx={{p: 20, height: '100vh'}}>
          <Typography component="h1">Title</Typography>
          <Typography>Title</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Article;
