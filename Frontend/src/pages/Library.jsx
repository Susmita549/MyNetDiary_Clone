import { Box } from '@chakra-ui/react';
import React from 'react';
import Diets from './Diets';
import Navbar from '../components/Navbar';
const Library = () => {
  return (
    <Box>
      <Navbar />
      <Diets />
    </Box>
  );
};

export default Library;
