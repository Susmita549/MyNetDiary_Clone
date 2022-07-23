import React from 'react';
import { Box, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
const WomenHelthSection = () => {
  return (
    <Box as="section" mt="-8rem">
      <Box p={'0 0 1.6rem 0'}>
        <Box p="0 15px 0 15px" maxW={'1470px'} m="auto">
          <Box>
            <Text
              color="#46618a"
              fontWeight={500}
              fontSize={['1.2rem', '1.5rem', '1.8rem', '2rem']}
              mb="20px"
            >
              {"“You really can't go wrong with MyNetDiary"}
              <Text as="br" display={['none', 'none', 'block', 'block']} />
              {'as a scientifically-proven way to help you lose weight”'}
            </Text>
          </Box>
          <Box pb="50px">
            <Image
              src={helthSection.logo}
              h={['32px', '32px', '48px', '60px']}
              m="auto"
            />
          </Box>
          <UnorderedList
            display={'flex'}
            listStyleType="none"
            ml={'0'}
            justifyContent="space-between"
            alignItems="center"
            gap={['10px', '10px', '10px', '30px']}
          >
            {helthSection.data.map((item, index) => (
              <ListItem
                key={uuidv4()}
                display={[
                  `${
                    index === 0 || index === 5 || index === 6 ? 'none' : 'block'
                  }`,
                  `${index === 0 ? 'none' : 'block'}`,
                  `${index === 0 ? 'none' : 'block'}`,
                  'block',
                ]}
              >
                <Image src={item} h="auto" maxH="50px" />
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default WomenHelthSection;

const helthSection = {
  heading:
    "“You really can't go wrong with MyNetDiary as a scientifically-proven way to help you lose weight”",
  logo: './assets/homepage/top/womenHelth.svg',
  data: [
    './assets/homepage/top/helth1.png',
    './assets/homepage/top/helth2.svg',
    './assets/homepage/top/helth3.svg',
    './assets/homepage/top/helth4.svg',
    './assets/homepage/top/helth5.svg',
    './assets/homepage/top/helth6.svg',
    './assets/homepage/top/helth7.svg',
  ],
};
