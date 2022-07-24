import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import InsightsCards from '../components/Home/InsightsCards';
import SectionCta from '../components/Home/SectionCta';
import SectionCompatible from '../components/Home/SectionCompatible';
import SectionBlog from '../components/Home/SectionBlog';
import StorySlider from '../components/Home/StorySlider';
import CalorieCounter from '../components/Home/CalorieCounter';
import Footer from '../components/Footer';
import WomenHelthSection from '../components/Home/WomenHelthSection';
import BeHealthy from '../components/Home/BeHealthy';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <BeHealthy />
      <WomenHelthSection />
      <InsightsCards />
      <CalorieCounter />
      <StorySlider />
      <SectionBlog />
      <SectionCompatible />
      <SectionCta />
      <Footer />
    </Box>
  );
};

export default Home;
