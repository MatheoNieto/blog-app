import React, {FC} from 'react';
import {Header} from '../Header';
import {Box} from '@mui/material';

type LayoutProps = {
  titleHeader: string;
  createPost?: boolean;
  children: React.ReactNode;
};

const makeStyles = {
  contentBody: {
    backgroundColor: '#F8F8F8',
    p: 20,
    height: '100vh',
    flexDirection: 'row',
    overflow: 'auto',
  },
};

const Layout: FC<LayoutProps> = ({titleHeader, createPost, children}) => {
  return (
    <>
      <Header title={titleHeader} createPost={createPost} />
      <Box component="div" sx={makeStyles.contentBody}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
