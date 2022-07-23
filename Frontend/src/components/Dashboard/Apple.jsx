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
  CircularProgress,
  CircularProgressLabel
} from '@chakra-ui/react';
const Apple = () => {
  //age calculation 
  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
  //console.log(getAge('1997-05-12'))
  let age = getAge('1987-05-12')
  let height = 160
  let weight = 55
  let totalCalorie = Math.floor(10 * weight + 6.25 * height - 5 * age + 5)
  //console.log(totalCalorie);
  let fat = Math.floor((20/100)*totalCalorie)
  let fatConsumed = 25
  let fatLeft = fat-fatConsumed
  let fatPercentage = Math.floor((fatConsumed/fat)*100)
  let carbs = Math.floor((45/100)*totalCalorie)
  let carbsConsumed = 50
  let carbsLeft = carbs - carbsConsumed
  let carbsPercentage = Math.floor((carbsConsumed/carbs)*100)
  let protein = Math.floor((35/100)*totalCalorie)
  let proteinConsumed = 100
  let proteinLeft = protein - proteinConsumed
  let proteinPercentage = Math.floor((proteinConsumed/protein)*100)
  
  let sum = fatPercentage + carbsPercentage + proteinPercentage
  let totalLeft = Math.floor((sum*totalCalorie)/100)

  console.log(sum);
  return (
    <Box>
      <Flex h="50px" justifyContent={'space-between'}  p='15px'>
        <Link to='/'>
        <Button
          bgColor={'#9DC6F2'}
          w="60px"
          h="60px"
          m="-40px 0 0 -40px"
          borderRadius={'50%'}
          
        >
          +
        </Button>
        </Link>
        <Box >
          <Text fontSize="lg" color="grey" mr='20px'>
            Calorie Budget
          </Text>
          <Heading as="h3" size="md" color="#2ca6db" mr='30px'>
            {totalCalorie}
          </Heading>
        </Box>
        <Box></Box>
      </Flex>
      <Flex h="300px"  justifyContent={'space-between'} p='10px' alignItems={'center'}>
       <Box w='130px' h='80%'  mt='10px'><Image src='./assets/leftapple.PNG' alt='leftapple'/></Box>
       <Box w='270px' h='80%'  mt='10px'>
       <CircularProgress value={40} color='pink.400' size='250px' thickness='6px'>
            <CircularProgressLabel>
              <Stack>
              <Heading as="h3" size="md"  color="green">{totalCalorie - totalLeft}</Heading>
              <Text fontSize='lg'>left of</Text>
              <Heading as="h3" size="md" color="#2ca6db">{totalCalorie}</Heading>
              </Stack>
            </CircularProgressLabel>
       </CircularProgress>
       </Box>
       <Box w='130px' h='80%'  mt='10px'><Image src='./assets/rightapple.PNG' alt='rightapple'/></Box>
      </Flex>
      <Flex h="100px" justifyContent={'space-around'} p="10px 0">
        {/* Box1 */}
        <Box w="30%" p="5px">
          <Flex justifyContent="space-between">
            <Text fontSize="md" color="grey">
              Fat
            </Text>
            <Text fontSize="md">{fatPercentage}% calorie</Text>
          </Flex>
          <Box>
            <Stack spacing={5} py='10px'>
              <Progress colorScheme="green" size="md" value={fatPercentage} />
            </Stack>
          </Box>
          <Flex justifyContent="space-between">
            <Text fontSize="md">{fatConsumed}g</Text>
            <Text fontSize="md">left {fatLeft}gm</Text>
          </Flex>
        </Box>

        {/* Box2*/}

        <Box w="30%" p="5px">
          <Flex justifyContent="space-between">
            <Text fontSize="md" color="grey">
              Carbs
            </Text>
            <Text fontSize="md">{carbsPercentage}% calorie</Text>
          </Flex>
          <Box>
            <Stack spacing={5}  py='10px'>
              <Progress colorScheme="red" size="md"  value={carbsPercentage} />
            </Stack>
          </Box>
          <Flex justifyContent="space-between">
            <Text fontSize="md">{carbsConsumed}g</Text>
            <Text fontSize="md">left {carbsLeft}gm</Text>
          </Flex>
        </Box>

        {/* Box3 */}

        <Box w="30%" p="5px">
          <Flex justifyContent="space-between">
            <Text fontSize="md" color="grey">
              Protein
            </Text>
            <Text fontSize="md">{proteinPercentage}% calorie</Text>
          </Flex>
          <Box>
            <Stack spacing={5} py='10px'>
              <Progress colorScheme="blue" size="md" value={proteinPercentage} />
            </Stack>
          </Box>
          <Flex justifyContent="space-between">
            <Text fontSize="md">{proteinConsumed}g</Text>
            <Text fontSize="md">left {proteinLeft}gm</Text>
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
