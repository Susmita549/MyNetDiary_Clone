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

const Footer = () => {
  return (
    <Box background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat">
      <Box>
        <Image src="./assets/homepage/footer/insta.svg" />
        <Image src="./assets/homepage/footer/twitter.svg" />
        <Image src="./assets/homepage/footer/fb.svg" />
        <Image src="./assets/homepage/footer/youtube.svg" />
        <Image src="./assets/homepage/footer/pinterest.svg" />
      </Box>
      <Box maxW={'1470px'} m="auto" p="0 15px" border={'1px solid blue'}>
        <Flex>
          <Box></Box>
          <Box>
            <Grid templateColumns="repeat(4, 1fr)">
              {footerItem.links.map(link => (
                <Box>
                  <Heading
                    as="h6"
                    fontSize={'22px'}
                    fontWeight={500}
                    color={'#46618a'}
                    textAlign="left"
                  >
                    {link.heading}
                  </Heading>

                  <UnorderedList textAlign={'left'}>
                    {link.subHeading.map(subHeading => (
                      <ListItem>{subHeading}</ListItem>
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
        border={'1px solid green'}
        backgroundColor="rgba(143,112,102,.05);"
        p="45px 0"
      >
        <Box>
          <Box maxW={'1470px'} m="auto" p="0 15px">
            <Flex justifyContent={'space-between'}>
              <Flex gap={2} color="#46618a" fontWeight={500}>
                <Text>Copyright © 2022 MyNetDiary Inc.</Text>
                <Text>All rights reserved.</Text>
              </Flex>

              <Flex gap={4} alignItems={'center'}>
                <Text
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Contact Us
                </Text>
                <Box h={'0.8rem'} borderLeft={'1px solid #ccbebc'} />
                <Text
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  FAQ
                </Text>
                <Box h={'0.8rem'} borderLeft={'1px solid #ccbebc'} />
                <Text
                  _hover={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Privacy
                </Text>
                <Box h={'0.8rem'} borderLeft={'1px solid #ccbebc'} />
                <Text
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

const footerItem = {
  logo: './assets/homepage/footer/footerLogo.svg',
  store: [
    {
      name: 'Apple Store',
      icon: './assets/homepage/footer/appleStore.svg',
    },
    {
      name: 'Google Play Store',
      icon: './assets/homepage/footer/playStore.svg',
    },
  ],
  stars: [
    './assets/homepage/footer/fullStar.png',
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
    },
    {
      name: 'facebook',
      icon: './assets/homepage/footer/fb.svg',
    },
    {
      name: 'twitter',
      icon: './assets/homepage/footer/twitter.svg',
    },
    {
      name: 'youtube',
      icon: './assets/homepage/footer/youtube.svg',
    },
    {
      name: 'pinterest',
      icon: './assets/homepage/footer/pinterest.svg',
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
