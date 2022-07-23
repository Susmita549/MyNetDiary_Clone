import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Progress,
  Button,
} from '@chakra-ui/react';
const Apple = () => {
  const total = JSON.parse(localStorage.getItem('total'));
  console.log(total);

  const getCompletdFat = () => {
    const value = Number(total.completedFat) / Number(total.totalFat);

    console.log(value * 100);
    return value * 100;
  };
  return (
    <Box>
      <Flex h="50px" justifyContent={'space-between'}>
        <Link to="/">
          <Button
            bgColor={'#9DC6F2'}
            w="60px"
            h="60px"
            m="-20px 0 0 -20px"
            borderRadius={'50%'}
          >
            +
          </Button>
        </Link>
        <Box>
          <Text fontSize="md" color="grey" mr="20px">
            Calorie Budget
          </Text>
          <Heading as="h3" size="md" color="#2ca6db" mr="30px">
            1,802
          </Heading>
        </Box>
        <Box></Box>
      </Flex>
      <Box h="300px">
        <Image src="./assets/apple1.PNG" />
      </Box>
      <Flex h="100px" justifyContent={'space-around'} p="10px 0">
        {/* Box1 */}
        <Box w="30%" p="5px">
          <Flex justifyContent="space-between">
            <Text fontSize="md" color="grey">
              Fat
            </Text>
            <Text fontSize="md">7% calorie</Text>
          </Flex>
          <Box>
            <Stack spacing={5}>
              <Progress
                colorScheme="green"
                size="md"
                value={getCompletdFat()}
              />
            </Stack>
          </Box>
          <Flex justifyContent="space-between">
            <Text fontSize="md">{Number(total.completedFat)}g</Text>
            <Text fontSize="md">
              left {Number(total.totalFat) - Number(total.completedFat)}gm
            </Text>
          </Flex>
        </Box>

        {/* Box2*/}

        <Box w="30%" p="5px">
          <Flex justifyContent="space-between">
            <Text fontSize="md" color="grey">
              Carbs
            </Text>
            <Text fontSize="md">7% calorie</Text>
          </Flex>
          <Box>
            <Stack spacing={5}>
              <Progress colorScheme="green" size="md" value={20} />
            </Stack>
          </Box>
          <Flex justifyContent="space-between">
            <Text fontSize="md">2g</Text>
            <Text fontSize="md">left 68gm</Text>
          </Flex>
        </Box>

        {/* Box3 */}

        <Box w="30%" p="5px">
          <Flex justifyContent="space-between">
            <Text fontSize="md" color="grey">
              Protein
            </Text>
            <Text fontSize="md">7% calorie</Text>
          </Flex>
          <Box>
            <Stack spacing={5}>
              <Progress colorScheme="green" size="md" value={20} />
            </Stack>
          </Box>
          <Flex justifyContent="space-between">
            <Text fontSize="md">2g</Text>
            <Text fontSize="md">left 68gm</Text>
          </Flex>
        </Box>
      </Flex>
      <Box h="150px">
        <Image src="./assets/calender.PNG" />
      </Box>
    </Box>
  );
};

export default Apple;
