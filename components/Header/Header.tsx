import React, {FC} from 'react';
import {Typography, AppBar, Grid, Button} from '@mui/material';
import Link from 'next/link';

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
  return (
    <AppBar component="nav">
      <Grid container sx={makeStyles.contentHeader}>
        <Typography variant="h6" component="div" sx={makeStyles.titleHeader}>
          {title}
        </Typography>

        {createPost && (
          <Link href="/create-article">
            <Button variant="contained" color="secondary">
              Create your post
            </Button>
          </Link>
        )}
      </Grid>
    </AppBar>
  );
};

export default Header;
