import React from 'react';
import {
  Box,
  Heading,
  Grid,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Button,
} from '@chakra-ui/react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
const SectionBlog = () => {
  return (
    <Box
      as="section"
      display={'block'}
      //   border={'1px solid green'}
      p={['40px 0 30px', '40px 0 30px', '56px 0 30px', '80px 0 70px']}
    >
      <Box>
        <Box maxW={'1470px'} m="auto" p="0 15px">
          <Heading
            color="#268fd0"
            as={'h3'}
            fontSize={['2rem', '3.5rem']}
            fontWeight={600}
            mb={['30px', '30px', '50px']}
          >
            Being Healthy Has Never Been Easier
          </Heading>
          <Grid
            templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
            gap={['3rem', '2rem', '3rem', '5rem']}
          >
            {blogData.map(item => (
              <Box
                key={uuidv4()}
                color={'#46618a'}
                boxShadow="rgb(219 213 208 / 78%) 0 3px 6px"
                rounded={'1.5rem'}
              >
                <Image
                  src={item.imgUrl}
                  rounded={'1.5rem 1.5rem 0 0'}
                  width="100%"
                />
                <Box p="1rem" textAlign={'left'}>
                  <Heading as={'h6'} fontSize={['1.2rem', '1.2rem', '1.7rem']}>
                    <Text
                      as="a"
                      href={item.href}
                      target="_blank"
                      _hover={{
                        textDecoration: 'underline',
                      }}
                    >
                      {item.name}
                    </Text>
                  </Heading>
                  <Box
                    width={['25%', '15%']}
                    borderTop={['1px solid #e6dbd9', '2px solid #e6dbd9']}
                    mt={['0.6rem', '1rem']}
                  ></Box>
                  <Text
                    pt={['0.6rem', '1rem']}
                    fontWeight={500}
                    fontSize={['14px', '17px']}
                  >
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
          <Button
            mt="2rem"
            variant="outline"
            height={['50px', '60px']}
            rounded={'50px'}
            color="#0bb850"
            colorScheme={''}
            border="2px solid transparent"
            borderColor="rgba(11,184,80,.4)"
            fontSize={['1.2rem', '1.4rem']}
            p={['30px 30px', '35px 40px']}
            onClick={() => console.log('someone clicked me')}
          >
            View All Articles
            <Box ml={2}>
              <BsFillCaretRightFill />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionBlog;

const blogData = [
  {
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/blog/tracking-diabetes-2.jpeg',
    name: 'Gain easier control over blood sugar with these diabetes tracking tips from MyNetDiary',
    href: 'https://www.mynetdiary.com/tracking-diabetes.html',
    description:
      'Learn to use MyNetDiary to its fullest as a powerful diabetes tracking tool.',
  },
  {
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/blog/benefits-of-cooking-at-home-vs-eating-out.jpeg',
    name: '10 Tips for making cooking at home a win-win on your busiest nights',
    href: 'https://www.mynetdiary.com/healthy-and-tasty-food.html',
    description:
      'Find out why frequent restaurant meals might be a problem for your health and learn 10 tips for successfully making healthy and tasty food at home. ',
  },
  {
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/blog/workouts-to-get-back-in-shape.jpeg',
    name: 'Home workouts to help you get back in shape',
    href: 'https://www.mynetdiary.com/workouts-to-get-back-in-shape.html',
    description:
      "If it's been some time since you had a regular workout routine, home workouts may be just what you need to get back in shape. The videos linked below target balance and strength and include options for both standing and seated exercises.",
  },
  {
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/blog/affordable-protein.jpeg',
    name: "Affordable protein sources that don't break the bank!",
    href: 'https://www.mynetdiary.com/affordable-protein.html',
    description:
      "While quality affordable protein, in particular, sounds like an oxymoron, still, budget-wise, healthy eating is possible. Check out these tips for building healthy meals using nutritious, protein-rich foods that don't break the bank.",
  },
];
