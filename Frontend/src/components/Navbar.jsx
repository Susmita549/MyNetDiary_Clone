import {
  Box,
  Button,
  Flex,
  ListItem,
  UnorderedList,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useDisclosure,
  Text,
  Icon,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsDot } from 'react-icons/bs';
import icon1 from '../assets/dietpage/CalorieCounting.svg';
import icon2 from '../assets/dietpage/Low-cardDiet.svg';
import icon3 from '../assets/dietpage/KetoDiet.svg';
import icon4 from '../assets/dietpage/HighProteinDiet.svg';
import icon5 from '../assets/dietpage/LowfatDiet.svg';
import icon6 from '../assets/dietpage/MediterraneamDiet.svg';
import icon7 from '../assets/dietpage/VegeterianDiet.svg';
import icon8 from '../assets/dietpage/VeganDiet.svg';
import homeLogo from '../assets/homepage/nav/logo-dark.svg';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      as="nav"
      position={'fixed'}
      top="0"
      w="100%"
      zIndex={100000}
      p="0 10px"
      background="white"
    >
      <Flex maxW={'1470px'} m="auto" p="5px 15px">
        {/* Logo  */}
        <Link to="/">
          <Box
            cursor="pointer"
            height={'50px'}
            width="220px"
            display={'block'}
            background={`url(${homeLogo}) 50% 50% no-repeat`}
            backgroundSize={'contain'}
            marginBottom="5px"
          ></Box>
        </Link>
        {/* Right Side  */}

        <Flex flex="1" justifyContent={'space-between'}>
          <UnorderedList
            display={'flex'}
            alignItems={'center'}
            listStyleType="none"
            ml="0"
            justifyContent={'center'}
            flex="1"
          >
            {NAV_ITEMS &&
              NAV_ITEMS.map((navItem, index) => (
                <Menu key={uuidv4()}>
                  {({ isOpen }) => (
                    <ListItem
                      p="0 20px"
                      height={'85%'}
                      color={'#46618a'}
                      border={
                        isOpen ? '1px solid #E2E8F0' : '1px solid transparent'
                      }
                      boxShadow={isOpen ? 'md' : ''}
                      rounded={'5px 5px 0 0'}
                      fontWeight={500}
                      fontSize={'22px'}
                      position="relative"
                      cursor={'pointer'}
                      zIndex={100}
                      _before={
                        index !== 0
                          ? {
                              display: 'block',
                              position: 'absolute',
                              top: '0.9rem',
                              left: '-0.2rem',
                              height: '0.4rem',
                              width: '0.4rem',
                              content: '""',
                              background: '#beaeac',
                              transform: ' rotate(45deg)',
                            }
                          : ''
                      }
                    >
                      <MenuButton zIndex={10} as="button" colorScheme="red">
                        <Text color={isOpen ? '#ff8e3e' : ''}>
                          {navItem.label}
                        </Text>
                      </MenuButton>
                      {navItem.children && (
                        <MenuList
                          ml="-1.3rem"
                          mt="2px"
                          boxShadow={'md'}
                          rounded={'0 5px 5px 5px'}
                          style={{ zIndex: '-10 !important' }}
                          pl="10px"
                          pr="10px"
                          minW={'18rem'}
                        >
                          {navItem.children.map(child => (
                            <>
                              {child.href ? (
                                <Link to={child.href}>
                                  <MenuItem
                                    key={uuidv4()}
                                    rounded="5px"
                                    fontSize={'xl'}
                                    _hover={{
                                      background: '#ff8e3e',
                                      color: 'white',
                                    }}
                                    icon={
                                      child.icon ? (
                                        ''
                                      ) : (
                                        <CircleIcon boxSize={2} />
                                      )
                                    }
                                  >
                                    {child.icon && (
                                      <Image
                                        src={child.icon}
                                        ml="-5px"
                                        mr="10px"
                                      />
                                    )}
                                    {child.label}
                                  </MenuItem>
                                </Link>
                              ) : (
                                <MenuItem
                                  key={uuidv4()}
                                  rounded="5px"
                                  fontSize={'xl'}
                                  _hover={{
                                    background: '#ff8e3e',
                                    color: 'white',
                                  }}
                                  icon={
                                    child.icon ? '' : <CircleIcon boxSize={2} />
                                  }
                                >
                                  {child.icon && (
                                    <Image
                                      src={child.icon}
                                      ml="-5px"
                                      mr="10px"
                                    />
                                  )}
                                  {child.label}
                                </MenuItem>
                              )}
                            </>
                          ))}
                        </MenuList>
                      )}
                    </ListItem>
                  )}
                </Menu>
              ))}
          </UnorderedList>
          <Flex justifyContent={'flex-end'}>
            <Button
              as="div"
              cursor="pointer"
              height="100%"
              colorScheme="green"
              background="linear-gradient(to bottom,#ffb845 0,#ff9945 100%)"
              rounded={'50px'}
              border="3px solid #fff"
              borderColor="rgba(138,85,70,.15)"
              fontSize={['0.7rem', '1.2rem']}
              p={['0 25px', '0 25px']}
              _hover={{
                rounded: '50px',
                backgroundColor: 'linear-gradient(to bottom,#fff45 0,red 100%)',
                opacity: '1',
              }}
              _active={{
                rounded: '50px',
                backgroundColor:
                  'linear-gradient(to bottom,#ff845 0,#ff9945 100%)',
              }}
              onClick={() => {
                navigate('/signup');
              }}
            >
              SIGN UP
            </Button>
            <Button
              ml="15px"
              variant="outline"
              rounded={'50px'}
              height="100%"
              color="#0bb850"
              colorScheme={''}
              border="2px solid transparent"
              borderColor="rgba(11,184,80,.4)"
              fontSize={['0.7rem', '1.2rem']}
              p={['0 25px', '0 25px']}
              textTransform={'uppercase'}
              _hover={{
                rounded: '50px',
                borderColor: '#0bb850',
                backgroundColor: 'white !important',
                opacity: '1',
                color: '#0bb850',
              }}
              _active={{
                rounded: '50px',
                color: 'white',
                borderColor: '#0bb850',
                backgroundColor: '#0bb850',
              }}
              onClick={() => {
                navigate('/signin');
              }}
            >
              SIGN IN
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

const CircleIcon = props => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const NAV_ITEMS = [
  {
    label: 'Features',
    children: [
      {
        label: 'iPhone & iPad app',
        href: '',
      },
      {
        label: 'Android app',
        href: '',
      },
      {
        label: 'User Reviews',
        href: '',
      },
      {
        label: 'MyNetDiary vs MyFitnessPal',
        href: '',
      },
    ],
    href: '',
  },
  {
    label: 'Diets',
    href: '',
    children: [
      {
        label: 'Calorie Counting',
        href: '',
        icon: icon1,
      },
      {
        label: 'Low-Carb',
        href: '',
        icon: icon2,
      },
      {
        label: 'Keto',
        href: '',
        icon: icon3,
      },
      {
        label: 'High-Protein',
        href: '',
        icon: icon4,
      },
      {
        label: 'Low-Fat',
        href: '',
        icon: icon5,
      },
      {
        label: 'Mediterranean',
        href: '',
        icon: icon6,
      },
      {
        label: 'Vegetarian',
        href: '',
        icon: icon7,
      },
      {
        label: 'Vegan',
        href: '',
        icon: icon8,
      },
    ],
  },
  {
    label: 'Library',
    href: '/library',
    children: [
      {
        label: 'Weight Loss Blog',
        href: '/library/dietitians-blog/dietitians-blog',
      },
      {
        label: 'Diet Library',
        href: '/library/diets/diet-library',
      },
      {
        label: 'Dietitian team',
        href: '/library/dietitian-team/dietitian-team',
      },
    ],
  },
  {
    label: 'Food',
    href: '',
    children: [
      {
        label: 'Food Search',
        href: '',
      },
      {
        label: 'Database Licensing & API',
        href: '',
      },
    ],
  },
  {
    label: 'Business',
    href: '',
    children: [
      {
        label: 'Find Healthcare Professional',
        href: '',
      },
      {
        label: 'For Healthcare Professionals',
        href: '',
      },
      {
        label: 'For Trainers and Clubs',
        href: '',
      },
      {
        label: 'MyNetDiary vs MyFitnessPal',
        href: '',
      },
      {
        label: 'Food Database Licensing',
        href: '',
      },
    ],
  },
];
