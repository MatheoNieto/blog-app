import React, {FC} from 'react';

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';
import {makeStyles} from './Card.styles';
import Link from 'next/link';
import {Posts} from '../../../../models';

type CardProps = {
  article: Posts;
};

const CardComponent: FC<CardProps> = ({article}) => {
  const renderPosts = () => {
    return article.posts.map((post, index) => (
      <Card key={`${post.id}-${index}`} sx={makeStyles.container}>
        <Link href={`/article/${post.id}`}>
          <CardActionArea>
            <CardContent>
              <Typography sx={makeStyles.titlePost}>{post.title}</Typography>
              <Divider />
              <Typography sx={makeStyles.infoPost}>{post.body}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    ));
  };

  return (
    <>
      <Divider>{`${article.name} - ${article.username}`}</Divider>
      <Grid container sx={makeStyles.contentPosts}>{renderPosts()}</Grid>
    </>
  );
};

export default CardComponent;
