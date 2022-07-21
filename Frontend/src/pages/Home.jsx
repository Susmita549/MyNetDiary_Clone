import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

import InsightsCards from '../components/Home/InsightsCards';
import SectionCta from '../components/Home/SectionCta';
import SectionCompatible from '../components/Home/SectionCompatible';
import SectionBlog from '../components/Home/SectionBlog';

const Home = () => {
  return (
    <Box>
      <Box>
        <Text> Home Page</Text>
      </Box>

      <InsightsCards />
      <SectionBlog />
      <SectionCompatible />
      <SectionCta />
    </Box>
  );
};

export default Home;
