import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import InsightsCards from '../components/Home/InsightsCards';

const Home = () => {
  return (
    <Box>
      <Box>
        <Text> Home Page</Text>
      </Box>

      <InsightsCards />
    </Box>
  );
};

export default Home;
