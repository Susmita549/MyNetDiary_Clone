import { Box, Heading, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

const InsightsCards = () => {
  return (
    <Box
      as="section"
      border={'1px solid green'}
      roundedBottom="100rem 5rem"
      background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat"
      _before={{
        display: 'block',
        width: '100%',
        top: '-50rem',
        height: '20rem',
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
            fontSize="3.5rem"
            fontWeight={500}
            mb="5rem"
          >
            {cards.Heading}
          </Heading>
          <Grid templateColumns="repeat(2,1fr)" gap={10}>
            {cards.data.map((item, index) => (
              <Box key={index}>
                <Image src={item.imgUrl} m="auto" h="200px" />
                <Heading
                  as={'h5'}
                  color="#268fd0"
                  m="4rem 0 2rem"
                  fontWeight={500}
                >
                  {item.title}
                </Heading>
                <Text color="#46618a" fontWeight={500} fontSize="1.5rem">
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
