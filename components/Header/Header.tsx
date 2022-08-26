import React, {FC} from 'react';
import {Typography, AppBar, Grid, Button} from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/router';

type HeaderProps = {
  title: string;
  createPost?: boolean;
};

const makeStyles = {
  contentHeader: {
    padding: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
};

const Header: FC<HeaderProps> = ({title, createPost}) => {
  const router = useRouter();

  return (
    <AppBar component="nav">
      <Grid container sx={makeStyles.contentHeader}>
        <Typography variant="h3" sx={makeStyles.titleHeader}>
          {title}
        </Typography>

        {createPost ? (
          <Button
            variant="contained"
            color="success"
            onClick={() => router.push('/create-article')}>
            Create your post
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={() => router.back()}>
            Back
          </Button>
        )}
      </Grid>
    </AppBar>
  );
};

export default Header;
