import { Box, Heading, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

const InsightsCards = () => {
  return (
    <Box
      as="section"
      roundedBottom="100rem 5rem"
      background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat"
      mb={'-20px'}
      _before={{
        display: 'block',
        width: '100%',
        top: '-50rem',
        height: '4.5rem',
        content: '""',
        background: '#fff',
        // border: '2px solid red',
        borderBottomRightRadius: '100rem 5rem',
        borderBottomLeftRadius: '100rem 5rem',
      }}
    >
      <Box p={'4rem 0 1.6rem 0'}>
        <Box p="0 15px 0 15px" maxW={'1470px'} m="auto">
          <Heading
            color="#268fd0"
            as={'h3'}
            fontSize={['2rem', '3.5rem']}
            fontWeight={500}
            mb={['30px', '30px', '50px']}
          >
            {cards.Heading}
          </Heading>
          <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']} gap={10}>
            {cards.data.map((item, index) => (
              <Box key={index}>
                <Image src={item.imgUrl} m="auto" h={["150px","150px","150px","200px"]} />
                <Heading
                  as={'h5'}
                  color="#268fd0"
                  m={['1rem 0', '1.5rem 0', '1.5rem 0', '4rem 0 2rem']}
                  fontSize={['1.6rem', '1.6rem', '1.8rem', '2.5rem']}
                  fontWeight={600}
                >
                  {item.title}
                </Heading>
                <Text
                  color="#46618a"
                  fontWeight={500}
                  fontSize={['1.2rem', '1.2rem', '1.2rem', '1.5rem']}
                >
                  {item.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default InsightsCards;

const cards = {
  Heading: 'What it takes to succeed',
  data: [
    {
      imgUrl: './assets/homepage/insightCard1.png',
      title: 'Find your Diet',
      description:
        'Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more.',
    },
    {
      imgUrl: './assets/homepage/insightCard2.png',
      title: 'Set Your Targets',
      description:
        'Choose your desired weekly weight loss rate, target date, and source of calories like fat, carbs, and proteins.',
    },
    {
      imgUrl: './assets/homepage/insightCard3.png',
      title: 'Log Your Meals & Exercise',
      description:
        'Use the App to track your food, physical activities, and nutrients. Use the barcode scanner. Log ahead of time for better planning and scheduling.',
    },
    {
      imgUrl: './assets/homepage/insightCard4.png',
      title: 'Reach Your Goals',
      description:
        'Monitor your daily progress, check your weight loss forecast, and receive ongoing advice and feedback. Learn more about nutrients in your diet and make better choices.',
    },
  ],
};
