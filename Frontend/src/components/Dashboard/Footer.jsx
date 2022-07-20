import React from 'react';
import { Container, Flex, Text, Box } from '@chakra-ui/react';
const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

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
          <Box  w="31%">
            <Box>
              <Text fontSize="lg" p="30px">© 2022 MyNetDiary Inc.</Text>
            </Box>
            <Box>
              <Text fontSize="xs" p="0 20px">
                All rights reserved. MyNetDiary is a registered trademark of
                MyNetDiary Inc.
              </Text>
            </Box>
          </Box>
          <Flex
            
            w="15%"
            flexDirection="column"
            lineHeight="25px"
            p="15px"
          >
            <Text fontSize="14px">
              <li>Success stories</li>
            </Text>
            <Text fontSize="14px">
              <li>Member testimonials</li>
            </Text>
            <Text fontSize="14px">
              <li>Community</li>
            </Text>
            <Text fontSize="14px">
              <li>Dietitian's Blog</li>
            </Text>
            <Text fontSize="14px">
              <li>Ask a Dietitian</li>
            </Text>
            <Text fontSize="14px">
              <li>Instant food search</li>
            </Text>
            <Text fontSize="14px">
              <li>Diabetes and health tracking</li>
            </Text>
          </Flex>

          <Flex
            
            w="15%"
            flexDirection="column"
            lineHeight="25px"
            p="15px"
          >
            <Text fontSize="14px">
              <li> iPhone/iPod app</li>
            </Text>
            <Text fontSize="14px">
              <li>iPad app</li>
            </Text>
            <Text fontSize="14px">
              <li>Android app</li>
            </Text>
            <Text fontSize="14px">
              <li>Diabetes app for iPhone</li>
            </Text>
            <Text fontSize="14px">
              <li>Diabetes app for Android</li>
            </Text>
            <Text fontSize="14px">
              <li>Products and features</li>
            </Text>
            <Text fontSize="14px">
              <li>Fitbit linking</li>
            </Text>
            <Text fontSize="14px">
              <li>Withings linking</li>
            </Text>
            <Text fontSize="14px">
              <li>Garmin linking</li>
            </Text>
            <Text fontSize="14px">
              <li>Twitter linking</li>
            </Text>
          </Flex>
          <Flex
           
            w="15%"
            flexDirection="column"
            lineHeight="25px"
            p="15px"
          >
            <Text fontSize="14px">
              <li>Gift cards & Group discounts</li>
            </Text>
            <Text fontSize="14px">
              <li>For trainers</li>
            </Text>
            <Text fontSize="14px">
              <li>For healthcare professionals</li>
            </Text>
            <Text fontSize="14px">
              <li>For families</li>
            </Text>
          </Flex>
          <Flex
            
            w="15%"
            flexDirection="column"
            lineHeight="25px"
            p="15px"
          >
            <Text fontSize="14px">
              <li>Help</li>
            </Text>
            <Text fontSize="14px">
              <li>Learn more</li>
            </Text>
            <Text fontSize="14px">
              <li>Diet articles</li>
            </Text>
            <Text fontSize="14px">
              <li>About</li>
            </Text>
            <Text fontSize="14px">
              <li>Privacy policy</li>
            </Text>
            <Text fontSize="14px">
              <li>Terms of use</li>
            </Text>
            <Text fontSize="14px">
              <li>Contact us</li>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
