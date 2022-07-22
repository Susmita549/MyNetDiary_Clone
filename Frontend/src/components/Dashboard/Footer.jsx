import React from 'react';
import { Container, Flex, Text, Box } from '@chakra-ui/react';
const Footer = () => {
  return (
    <div>
     

      <Container
        maxW="container.5xl"
        h="400px"
        bg="rgb(59, 131, 2)"
        p="8px"
        textAlign="left"
        color="#f5f5f5"
        fontFamily="Roboto, sans-serif"
        fontWeight="400"
        justifyContent="space-around"
        backgroundImage="url(https://s3.amazonaws.com/img.mynetdiary.com/footer@2x.png)"
      >
        <Flex
          
          maxW={'1170px'}
          h="100%"
          m="auto"
          justifyContent="space-around"
        >
          <Box w="31%" >
            <Box>
              <Text fontSize="lg" p="30px">
                © 2022 MyNetDiary Inc.
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs" p="0 20px">
                All rights reserved. MyNetDiary is a registered trademark of
                MyNetDiary Inc.
              </Text>
            </Box>
          </Box>
          <Flex w="15%" flexDirection="column" lineHeight="25px" p="15px">
            <ul style={{ fontSize: '15px' }}>
              <li>Success stories</li>

              <li>Member testimonials</li>

              <li>Community</li>

              <li>Dietitian's Blog</li>

              <li>Ask a Dietitian</li>

              <li>Instant food search</li>

              <li>Diabetes and health tracking</li>
            </ul>
          </Flex>

          <Flex w="15%" flexDirection="column" lineHeight="25px" p="15px">
            <ul style={{ fontSize: '15px' }}>
              <li> iPhone/iPod app</li>

              <li>iPad app</li>

              <li>Android app</li>

              <li>Diabetes app for iPhone</li>

              <li>Diabetes app for Android</li>

              <li>Products and features</li>

              <li>Fitbit linking</li>

              <li>Withings linking</li>

              <li>Garmin linking</li>

              <li>Twitter linking</li>
            </ul>
          </Flex>
          <Flex w="15%" flexDirection="column" lineHeight="25px" p="15px">
            <ul style={{ fontSize: '15px' }}>
              <li>Gift cards & Group</li>

              <li>For trainers</li>

              <li>Healthcare professionals</li>

              <li>For families</li>
            </ul>
          </Flex>
          <Flex w="15%" flexDirection="column" lineHeight="25px" p="15px">
            <ul style={{ fontSize: '15px' }}>
              <li>Help</li>

              <li>Learn more</li>

              <li>Diet articles</li>

              <li>About</li>

              <li>Privacy policy</li>

              <li>Terms of use</li>

              <li>Contact us</li>
            </ul>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
