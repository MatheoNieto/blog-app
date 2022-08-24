import type {NextPage} from 'next';
import {Box} from '@mui/material';

import {Card} from './components/Card';
import {Layout} from '../../components/Layout';
import {Posts} from '../../models';
import {useGetPosts} from '../../core/hooks/getPosts';

const Home: NextPage = () => {
  const {data: listPosts} = useGetPosts();

  const renderArticles = () => {
    return listPosts?.map((post: Posts, index: number) => (
      <Card key={`${post.id}-${index}`} article={post} />
    ));
  };

  return (
    <>
      <Layout titleHeader="Welcome to favorite blog" createPost={true}>
        <Box component="main"> {renderArticles()}</Box>
      </Layout>
    </>
  );
};

export default Home;
