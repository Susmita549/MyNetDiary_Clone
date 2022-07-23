import {
  Box,
  Heading,
  Grid,
  Image,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { SiInstagram } from 'react-icons/si';
import { FaPinterestP } from 'react-icons/fa';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <Box
      background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat"
      position={'relative'}
      className={styles.homeFooterSec}
      width="100%"
    >
      <Box
        maxW={'1470px'}
        m="auto"
        p="5rem 1rem 0 1rem"
        // border={'1px solid blue'}
      >
        <Box mb={'2.5rem'} display={['block', 'block', 'block', 'none']}>
          <Link to="/">
            <Image src={footerItem.logo} h={['42px', '42px', '68px']} />
          </Link>
        </Box>
        <Flex
          justifyContent={['center', 'center', 'center', 'space-between']}
          flexDirection={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'row',
          ]}
        >
          <Box mr={['0', '1.5rem']}>
            <Box mb={'3.5rem'} display={['none', 'none', 'none', 'block']}>
              <Link to="/">
                <Image
                  src={footerItem.logo}
                  h={['65px', '65px', '65px', '63px', '68px']}
                />
              </Link>
            </Box>
            <Flex
              gap={4}
              fontSize={['lg', 'xl']}
              flexDirection={['column', 'column', 'row', 'column']}
            >
              <Flex gap={4}>
                {footerItem.store.map(store => (
                  <Box key={uuidv4()} as="a" target="_blank" href={store.href}>
                    <Image src={store.icon} width="144px" />
                  </Box>
                ))}
              </Flex>
              <Flex color={'#5b6067'} mt="1rem" gap={1}>
                {footerItem.stars.map(star => (
                  <Image
                    key={uuidv4()}
                    src={star}
                    width={['20px', '24px']}
                    h={['20px', '24px']}
                  />
                ))}
                <Text as={'strong'}>4.8</Text>
                <Text as={'span'} color="#beaeac" position={'relative'}>
                  <Text
                    position={'absolute'}
                    top="-1"
                    m="0 3px"
                    fontSize={'40px'}
                    lineHeight="0.3"
                  >
                    {'.'}
                  </Text>
                </Text>
                <Text fontWeight={500} ml="0.7rem">
                  61,383 Ratings
                </Text>
              </Flex>
            </Flex>
            <UnorderedList listStyleType={'none'} ml="0">
              <Flex
                m={['15px 0 10px', '45px 0 10px']}
                alignItems={'center'}
                gap={2}
              >
                {footerItem.socialMedia.map(item => (
                  <ListItem
                    key={uuidv4()}
                    color="rgb(207, 192, 190)"
                    _hover={{
                      color: item.color,
                    }}
                    _active={{
                      background: item.bg ? item.bg : item.color,
                      color: 'white',
                    }}
                    rounded="50%"
                  >
                    <Box
                      as="a"
                      href={item.href}
                      target="_blank"
                      position={'relative'}
                      // background="rgba(110,0,0,.11)"
                    >
                      <Flex
                        w={['50px', '56px']}
                        h={['50px', '56px']}
                        border="2px solid rgba(110,0,0,.11)"
                        rounded={'50%'}
                        justifyContent="center"
                        alignItems={'center'}
                        _hover={{
                          border: `2px solid ${item.color}`,
                        }}
                      >
                        {/* <Image src={item.icon} /> */}
                        {item.reactIcon}
                      </Flex>
                    </Box>
                  </ListItem>
                ))}
              </Flex>
            </UnorderedList>
          </Box>
          <Box>
            <Grid
              templateColumns={[
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
                'repeat(4, auto)',
              ]}
              gridTemplateAreas={'revert'}
              gap={[2, 3, 5]}
            >
              {footerItem.links.map(link => (
                <Box key={uuidv4()}>
                  <Heading
                    as="h6"
                    fontSize={['18px', '20px']}
                    fontWeight={500}
                    color={'#46618a'}
                    textAlign="left"
                    m={['0.5rem 0 2rem 0', '0.5rem 0 2rem 0', '1rem 0 3rem 0']}
                  >
                    {link.heading}
                  </Heading>

                  <UnorderedList textAlign={'left'} ml="0">
                    {link.subHeading.map(subHeading => (
                      <ListItem
                        key={uuidv4()}
                        listStyleType={'none'}
                        position="relative"
                        pl="1rem"
                        mb={['0.5rem', '0.5rem', '1rem']}
                        color={'#46618a'}
                        fontWeight={500}
                        fontSize={['sm', 'md', 'md', '19px']}
                        _before={{
                          position: 'absolute',
                          top: '-9',
                          left: '0',
                          content: '"."',
                          fontSize: '3rem',
                          color: '#beaeac',
                          rounded: '50%',
                        }}
                      >
                        {subHeading}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
      <Box
        as="section"
        // border={'1px solid green'}
        backgroundColor="rgba(143,112,102,.05);"
        p="45px 0"
        width={'100%'}
      >
        <Box>
          <Box maxW={'1470px'} m="auto" p={['0 5px', '0 15px']}>
            <Flex
              justifyContent={['center', 'space-between']}
              fontWeight={500}
              fontSize={['sm', 'lg']}
              flexDirection={[
                'column-reverse',
                'column-reverse',
                'column-reverse',
                'row',
              ]}
            >
              <Flex
                gap={[1, 2]}
                color="#46618a"
                flexDirection={['column', 'column', 'row', 'row']}
                justifyContent={'center'}
              >
                <Text>Copyright © 2022 MyNetDiary Inc.</Text>
                <Text>All rights reserved.</Text>
              </Flex>

              <Flex
                alignItems={'center'}
                color="#46618a"
                justifyContent={['center', '']}
                mb={['10px', '']}
              >
                <Text
                  p={['0 10px', '0 15px']}
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Contact Us
                </Text>
                <Box
                  h={['0.5rem', '0.8rem']}
                  borderLeft={'1px solid #ccbebc'}
                />
                <Text
                  p={['0 10px', '0 15px']}
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  FAQ
                </Text>
                <Box
                  h={['0.5rem', '0.8rem']}
                  borderLeft={'1px solid #ccbebc'}
                />
                <Text
                  p={['0 10px', '0 15px']}
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Privacy
                </Text>
                <Box
                  h={['0.5rem', '0.8rem']}
                  borderLeft={'1px solid #ccbebc'}
                />
                <Text
                  p={['0 10px', '0 15px']}
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Terms of Use
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

var youtubeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37px"
    height="42px"
    viewBox="0 0 1000 1000"
  >
    <path
      fillRule="evenodd"
      fill="rgb(207, 192, 190)"
      d="M891,516.4c-4.7-21.5-15.2-39.6-31.4-54.1c-16.2-14.6-34.9-23.1-56.1-25.7c-67.1-7.3-168.2-10.9-303.5-10.9c-135.3,0-236.3,3.6-303,10.9c-21.5,2.6-40.3,11.1-56.3,25.7c-16,14.6-26.6,32.6-31.7,54.1c-9.5,42.3-14.2,106.1-14.2,191.4c0,86.8,4.7,150.6,14.2,191.4c4.7,21.5,15.2,39.6,31.5,54.1c16.2,14.6,34.9,23,56.1,25.2C263.6,986.2,364.7,990,500,990c135.2,0,236.4-3.8,303.5-11.5c21.2-2.2,39.7-10.6,55.8-25.2c16-14.6,26.6-32.6,31.7-54.1c9.5-42.3,14.2-106.1,14.2-191.4C905.2,621,900.5,557.2,891,516.4z M326.1,571.6h-58.5v311.2h-54.7V571.6h-57.4v-51.4h170.6L326.1,571.6L326.1,571.6z M473.8,882.8h-48.7v-29.5c-19.7,22.2-38.3,33.4-55.8,33.4c-16.8,0-27.3-6.8-31.7-20.2c-2.9-8.7-4.4-22.1-4.4-39.9V612.7h48.7v199.1c0,11.7,0.2,18,0.6,19.1c1.1,7.7,4.9,11.5,11.5,11.5c9.8,0,20.2-7.7,31.2-23V612.7h48.7L473.8,882.8L473.8,882.8z M659.7,801.9c0,26.6-1.6,44.9-4.9,54.7c-6.2,20-19.1,30.1-38.8,30.1c-17.5,0-34.4-10-50.9-30.1v26.2h-48.7V520.2h48.7v118.7c15.7-19.7,32.6-29.5,50.9-29.5c19.7,0,32.6,10.2,38.8,30.6c3.3,9.5,4.9,27.5,4.9,54.1V801.9z M844.5,757h-97.9v47.6c0,25.2,8.4,37.7,25.2,37.7c12,0,19.3-6.6,21.9-19.7c0.7-3.6,1.1-14.8,1.1-33.4h49.8v7.1c0,17.9-0.4,28.4-1.1,31.7c-1.1,9.8-4.9,19.7-11.5,29.5c-13.1,19.3-32.8,29-59.1,29c-25.1,0-44.8-9.3-59.1-27.9c-10.6-13.5-15.9-34.6-15.9-63.4v-94.6c0-28.8,5.1-49.9,15.3-63.4c14.2-18.6,33.7-27.9,58.5-27.9c24.4,0,43.8,9.3,58,27.9c9.9,13.5,14.8,34.6,14.8,63.4V757L844.5,757z"
    ></path>
    <path
      fillRule="evenodd"
      fill="rgb(207, 192, 190)"
      d="M589.7,653.7c-8.4,0-16.6,4-24.6,12v164.6c8,8,16.2,12,24.6,12c14.2,0,21.3-12.2,21.3-36.6V690.3C611,665.9,603.9,653.7,589.7,653.7z"
    ></path>
    <path
      fillRule="evenodd"
      fill="rgb(207, 192, 190)"
      d="M771.3,653.7c-16.4,0-24.6,12.4-24.6,37.2V716h49.2v-25.2C795.9,666.1,787.7,653.7,771.3,653.7z"
    ></path>
    <path
      fillRule="evenodd"
      fill="rgb(207, 192, 190)"
      d="M294.4,228.2v148.2h54.7V228.2L415.2,10h-55.8l-37.2,143.8L283.5,10h-58c10.2,30.6,22.1,64.7,35.5,102.3C278.2,162.6,289.3,201.2,294.4,228.2z"
    ></path>
    <path
      fillRule="evenodd"
      fill="rgb(207, 192, 190)"
      d="M488.5,380.2c25.2,0,44.5-9.3,58-27.9c10.2-13.5,15.3-35,15.3-64.5v-95.7c0-29.2-5.1-50.5-15.3-64c-13.5-18.6-32.8-27.9-58-27.9c-24.4,0-43.6,9.3-57.4,27.9c-10.2,13.5-15.3,34.8-15.3,64v95.7c0,29.2,5.1,50.7,15.3,64.5C445,370.9,464.1,380.2,488.5,380.2z M465,182.3c0-25.2,7.8-37.7,23.5-37.7s23.5,12.6,23.5,37.7v114.8c0,25.5-7.8,38.3-23.5,38.3S465,322.6,465,297.1V182.3z"
    ></path>
    <path
      fillRule="evenodd"
      fill="rgb(207, 192, 190)"
      d="M638.9,380.2c18.2,0,37-11.3,56.3-33.9v30.1H745V103.5h-49.8v208.4c-10.9,15.7-21.3,23.5-31.2,23.5c-6.6,0-10.4-4-11.5-12c-0.4-0.7-0.6-7.1-0.6-19.1V103.5h-49.8V319c0,18.6,1.5,32.3,4.4,41C611.4,373.5,622.1,380.2,638.9,380.2z"
    ></path>
  </svg>
);

const footerItem = {
  logo: './assets/homepage/footer/footerLogo.svg',
  store: [
    {
      name: 'Apple Store',
      icon: './assets/homepage/footer/appleStore.svg',
      href: 'https://apps.apple.com/us/app/calorie-counter-mynetdiary/id287529757',
    },
    {
      name: 'Google Play Store',
      icon: './assets/homepage/footer/playStore.svg',
      href: 'https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dwebsite%26utm_campaign%3Dfooter_link',
    },
  ],
  stars: [
    './assets/homepage/footer/fullStar.png',
    './assets/homepage/footer/fullStar.png',
    './assets/homepage/footer/fullStar.png',
    './assets/homepage/footer/fullStar.png',
    './assets/homepage/footer/halfStar.png',
  ],
  socialMedia: [
    {
      name: 'Instagram',
      icon: './assets/homepage/footer/insta.svg',
      reactIcon: <SiInstagram fontSize="30px" />,
      href: 'https://www.instagram.com/mynetdiary/',
      color: '#e95950',
      bg: 'linear-gradient(to bottom,#774ec2 0,#d32e8c 34%,#f57334 69%,#fed97d 100%)',
    },
    {
      name: 'facebook',
      icon: './assets/homepage/footer/fb.svg',
      reactIcon: <ImFacebook fontSize="27px" />,
      href: 'https://www.facebook.com/mynetdiary/',
      color: '#46618a',
    },
    {
      name: 'twitter',
      icon: './assets/homepage/footer/twitter.svg',
      reactIcon: <ImTwitter fontSize="30px" />,
      href: 'https://twitter.com/mynetdiary/',
      color: '#1da1f3',
    },
    {
      name: 'youtube',
      icon: './assets/homepage/footer/youtube.svg',
      reactIcon: youtubeIcon,
      href: 'https://www.youtube.com/user/MyNetDiary',
      color: '#f50e1b',
    },
    {
      name: 'pinterest',
      icon: './assets/homepage/footer/pinterest.svg',
      reactIcon: <FaPinterestP fontSize="30px" />,
      href: 'https://www.pinterest.com/mynetdiary/',
      color: '#ca2127',
    },
  ],
  links: [
    {
      heading: 'APP FEATURES',
      subHeading: [
        'iPhone & iPad app',
        'Android app',
        'Android app',
        'Keto Diet',
        'Low-Carb Diet',
        'Premium Calorie Counting',
        'MyNetDiary vs MyFitnessPal',
      ],
    },
    {
      heading: 'WEIGHT LOSS SCIENCE',
      subHeading: ['Weight Loss Blog', 'Diet Library', 'Dietitian Team'],
    },
    {
      heading: 'BUSINESS',
      subHeading: [
        'Gift cards & Group discounts',
        'For trainers',
        'For healthcare professionals',
        'For families',
        'Food database licensing',
      ],
    },
    {
      heading: 'COMPANY',
      subHeading: [
        'About MyNetDiary',
        'In the News',
        'Press Releases',
        'Press Kit',
      ],
    },
  ],
};
