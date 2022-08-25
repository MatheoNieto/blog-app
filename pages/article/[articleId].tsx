import {useEffect} from 'react';
import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Container, Typography, Divider, Grid, Box} from '@mui/material';
import {Layout} from '../../components/Layout';
import {useGetPosts} from '../../core/hooks/getDetailPost';
import {makeStyles} from './styles';
import {CommentsComponent} from './components/Comments';

const Article: NextPage = () => {
  const router = useRouter();
  const {articleId} = router.query;
  const {data: detailPost, refetch} = useGetPosts(articleId);

  useEffect(() => {
    setTimeout(() => refetch(), 500);
  }, [articleId, refetch]);

  if (!detailPost) {
    return <Typography component="h1">loading</Typography>;
  }

  const renderComments = () => {
    return detailPost.post.comments.map((comment, index) => (
      <Box key={`${comment.id}-${index}`}>
        <Typography
          sx={
            makeStyles.textBold
          }>{`${comment.name} (${comment.email})`}</Typography>
        <Typography>{comment.body}</Typography>
      </Box>
    ));
  };

  const renderInfoUser = () => (
    <>
      <Box>
        <Typography sx={makeStyles.textBold}>Name</Typography>
        <Typography>{detailPost.name}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Username</Typography>
        <Typography>{detailPost.username}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Phone</Typography>
        <Typography>{detailPost.phone}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Email</Typography>
        <Typography>{detailPost.email}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Website</Typography>
        <Typography>{detailPost.website}</Typography>
      </Box>
    </>
  );

  return (
    <>
      <Layout titleHeader={`${detailPost.name} - ${detailPost.username}`}>
        <Container maxWidth="md">
          <Typography component="h1">{detailPost.post.title}</Typography>
          <Typography>{detailPost.post.body}</Typography>

          <Divider>Comments</Divider>
          <Grid>
            <CommentsComponent />
            {renderComments()}
          </Grid>
          <Divider>Information of the user</Divider>
          <Grid>{renderInfoUser()}</Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Article;
