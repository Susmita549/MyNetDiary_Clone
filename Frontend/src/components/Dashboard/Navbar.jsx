import React from 'react';

import {
  Container,
  Box,
  Flex,
  Spacer,
  Image,
  Stack,
  Text,
  TabList,
  Tab,
  Tabs,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

let litag = [
  { name: 'DASHBOARD', link: '/dashboard' },
  { name: 'PLAN', link: '/plan' },
  { name: 'FOOD', link: '/food' },
  { name: 'EXERCISE', link: '' },
  { name: 'ANALYSIS', link: '' },
  { name: 'COMMUNITY', link: '' },
  { name: 'SETTINGS', link: '' },
];

const Navbar = () => {
  const [data, setData] = useState(litag);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, onChange] = useState(new Date());
  const day = [
    '',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const today = new Date();
  let date = today.getDay();
  let todayDate = day[date]
  const [valuee, setValue] = useState(todayDate);
  const handleClickRight = () => {
    if (day.indexOf(valuee) < 7) {
      let y = day.indexOf(valuee) + 1;
      setValue(day[y]);
      console.log(y);
    } else {
      let s = Math.floor(day.indexOf(valuee) / 7);
      setValue(day[s]);
    }
  };
  const handleClickLeft = () => {
    if (day.indexOf(valuee) > 0) {
      let y = day.indexOf(valuee) - 1;
      setValue(day[y]);
    } else {
      let s = day.indexOf(valuee)-1;
    }
  };

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
          <Link w="20%" to="/">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/logo_react.png"
              alt="logo"
              style={{ cursor: 'pointer', margin: 'auto' }}
            />
          </Link>

          <Flex
            h="100%"
            w="30%"
            m="auto"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              bgColor={'rgb(59, 131, 2)'}
              onClick={onOpen}
              _hover={{
                background: 'none',
              }}
              _active={{
                background: 'none',
              }}
            >
              <Image
                height="50px"
                width="50px"
                src="https://www.mynetdiary.com/img/icon/date_range_gray.png"
                alt="calender"
              />{' '}
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Calender</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Calendar onChange={onChange} value={value} />
                  <Box className="text-center">
                    Selected date: {value.toDateString()}
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* </Box> */}
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
                  onClick={handleClickLeft}
                />
              </Box>
              <Box h="80%" w="50%">
                <Text fontSize="2xl" align="center">
                  {valuee}
                </Text>
              </Box>
              <Box h="80%" w="5%">
                <Image
                  h="100%"
                  w="100%"
                  src="https://s3.amazonaws.com/img.mynetdiary.com/right.png"
                  alt="right arrow"
                  onClick={handleClickRight}
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

        <Tabs colorScheme="white" marginTop={'17px'}>
          <Flex
            justifyContent="space-between"
            maxW={'1170px'}
            m="auto"
            h="50%"
            color="white"
          >
            {data.map((el, index) => (
              <Tab key={index}>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="white"
                  cursor="pointer"
                  _hover={{ fontWeight: 'bold', fontSize: 'md' }}
                >
                  <Link to={el.link}>{el.name}</Link>
                </Text>
              </Tab>
            ))}

            <Tab></Tab>
          </Flex>
        </Tabs>
      </Container>
    </div>
  );
};

export default Navbar;
