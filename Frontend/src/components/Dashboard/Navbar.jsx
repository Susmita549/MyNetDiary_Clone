import React from 'react';
import {
  Container,
  Box,
  Flex,
  Spacer,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
const Navbar = () => {
  // const [value, onChange] = useState(new Date());
  return (
    <div>
      <Container
        maxW="container.5xl"
        bg="rgb(59, 131, 2)"
        h="120"
        p="8px"
        color="rgb(255, 255, 255)"
      >
        <Flex h="50%" maxW={'1170px'} m="auto">
          <Box w="20%">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/logo_react.png"
              alt="logo"
              style={{ cursor: 'pointer', margin: 'auto' }}
            />
          </Box>

          <Flex
            h="100%"
            w="30%"
            m="auto"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box h="80%" w="12%">
              <Image
                boxSize="100%"
                src="https://www.mynetdiary.com/img/icon/date_range_gray.png"
                alt="calender"
              />
              {/* <Box>
                <Calendar onChange={onChange} value={value} />
              </Box> */}
            </Box>
            <Flex
              h="80%"
              w="80%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box h="80%" w="5%">
                <Image
                  h="100%"
                  w="100%"
                  src="https://s3.amazonaws.com/img.mynetdiary.com/left.png"
                  alt="left arrow"
                />
              </Box>
              <Box h="80%" w="40%">
                <Text fontSize="2xl" align="center">
                  Today
                </Text>
              </Box>
              <Box h="80%" w="5%">
                <Image
                  h="100%"
                  w="100%"
                  src="https://s3.amazonaws.com/img.mynetdiary.com/right.png"
                  alt="right arrow"
                />
              </Box>
            </Flex>
          </Flex>

          <Box w="20%">
            <Flex h="80%" w="80%" m="5px ">
              <Image
                h="100%"
                w="100%"
                src="https://www.mynetdiary.com/img/Premium_planning_x2.png"
                alt="button"
                style={{ cursor: 'pointer', margin: 'auto' }}
              />
            </Flex>
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          maxW={'1170px'}
          m="auto"
          alignItems="end"
          h="50%"
        >
          <Text fontSize="sm" fontWeight="bold">
            DASHBOARD
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            PLAN
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            FOOD
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            EXERCISE
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            ANALYSIS
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            COMMUNITY
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            SETTINGS
          </Text>
        </Flex>
      </Container>

      
    </div>
  );
};

export default Navbar;
