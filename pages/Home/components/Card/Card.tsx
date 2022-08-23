import type {NextPage} from 'next';
import {CardProps} from './Card.types';

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Grid,
  Avatar,
  Divider,
} from '@mui/material';
import {makeStyles} from './Card.styles';

const CardComponent: NextPage<CardProps> = ({article}) => {
  return (
    <Card sx={makeStyles.container}>
      <CardActionArea>
        <CardContent>
          <Grid container sx={makeStyles.infoAuthor}>
            <Avatar
              alt={article.author.name}
              src={article.author.imageProfile}
              sx={makeStyles.imageAuthor}
            />
            <Typography>
              {`${article.author.name} ${article.author.lastName}`}
            </Typography>
          </Grid>
          <Divider />
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>

          <Grid container sx={makeStyles.infoArticle}>
            <Typography>Read: {article.times_read}</Typography>
            <Typography>Date: {article.date_created}</Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
