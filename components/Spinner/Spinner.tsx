import React from 'react';
import {Container, CircularProgress} from '@mui/material';
import {green} from '@mui/material/colors';

const Spinner = () => {
  return (
    <Container maxWidth="sm">
      <CircularProgress
        size={50}
        sx={{
          color: green[500],
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '-12px',
          marginLeft: '-12px',
        }}
      />
    </Container>
  );
};

export default Spinner;
