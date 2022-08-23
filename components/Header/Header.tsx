import React, {FC} from 'react';
import {Typography, AppBar, Grid, Button} from '@mui/material';
import {makeStyles} from './Header.styles';
import {HeaderProps} from './Header.types';
import Link from 'next/link';

const Header: FC<HeaderProps> = ({title, createPost}) => {
  return (
    <AppBar component="nav">
      <Grid container sx={makeStyles.contentHeader}>
        <Typography variant="h6" component="div" sx={makeStyles.titleHeader}>
          {title}
        </Typography>

        {createPost && (
          <Link href="/create-article">
            <Button variant="contained" color="secondary" >Create your post</Button>
          </Link>
        )}
      </Grid>
    </AppBar>
  );
};

export default Header;
