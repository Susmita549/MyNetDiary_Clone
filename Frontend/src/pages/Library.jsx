import { Box } from '@chakra-ui/react';
import React from 'react';
import Diets from './Diets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Library = () => {
  return (
    <Box>
      <Navbar />
      <Diets />
      <Footer />
    </Box>
  );
};

export default Library;
