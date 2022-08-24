import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import type {NextPage} from 'next';
import {Container, Typography, Divider, Grid, Box} from '@mui/material';
import {Layout} from '../../components/Layout';
import {useGetPosts} from '../../core/hooks/getPosts';
import {Posts, PostsType} from '../../models';
import {makeStyles} from './styles';

const Article: NextPage = () => {
  const router = useRouter();
  const {articleId} = router.query;
  const {data: listPosts} = useGetPosts();
  const [dataPostUser, setDataPostUser] = useState<Posts | undefined>();
  const [dataPost, setDataPost] = useState<PostsType | undefined>();

  useEffect(() => {
    const getPostsUser = () => {
      const idUser = parseInt(articleId?.split('-')[1]);

      const post = listPosts?.find(postUser => idUser === postUser.id);
      setDataPostUser(post);
    };
    getPostsUser();
  }, [articleId, listPosts]);

  useEffect(() => {
    const getDetailPost = () => {
      const idPost = parseInt(articleId?.split('-')[0]);

      const detailPost = dataPostUser?.posts.find(post => post.id === idPost);
      setDataPost(detailPost);
    };

    getDetailPost();
  }, [dataPostUser, articleId]);

  if (!dataPost || !dataPostUser) {
    return <Typography component="h1">loading</Typography>;
  }

  const renderComments = () => {
    return dataPost.comments.map((comment, index) => (
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
        <Typography>{dataPostUser.name}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Username</Typography>
        <Typography>{dataPostUser.username}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Phone</Typography>
        <Typography>{dataPostUser.phone}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Email</Typography>
        <Typography>{dataPostUser.email}</Typography>
      </Box>
      <Box>
        <Typography sx={makeStyles.textBold}>Website</Typography>
        <Typography>{dataPostUser.website}</Typography>
      </Box>
    </>
  );

  return (
    <>
      <Layout titleHeader={`${dataPostUser.name} - ${dataPostUser.username}`}>
        <Container maxWidth="md">
          <Typography component="h1">{dataPost.title}</Typography>
          <Typography>{dataPost.body}</Typography>

          <Divider>Comments</Divider>
          <Grid>{renderComments()}</Grid>
          <Divider>Information of the user</Divider>
          <Grid>{renderInfoUser()}</Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Article;
