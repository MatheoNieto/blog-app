import type {NextPage} from 'next';
import {CardProps} from './Card.types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Card: NextPage<CardProps> = ({article}) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}} />
    </Container>
  );
};

export default Card;
