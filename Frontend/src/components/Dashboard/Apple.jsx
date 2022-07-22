import React from 'react';
import { Box, Flex, Image, Heading, Text,Stack,Progress } from '@chakra-ui/react';
const Apple = () => {
  return (
    <Box>
      <Box  h="50px">
        <Text fontSize="md" color="grey">
          Calorie Budget
        </Text>
        <Heading as="h3" size="md" color="#2ca6db">
          1,802
        </Heading>
      </Box>
      <Box  h="300px">
        <Image src="./assets/apple1.PNG" />
      </Box>
      <Flex  h="100px" justifyContent={'space-around'} p='10px 0'>
        {/* Box1 */}
        <Box  w='30%' p='5px'>
          <Flex justifyContent='space-between'>
            <Text fontSize="md" color='grey'>Fat</Text>
            <Text fontSize="md">7% calorie</Text>
          </Flex>
          <Box>
          <Stack spacing={5}>
             <Progress colorScheme='green' size='md' value={20} />
  
          </Stack>
          </Box>
          <Flex justifyContent='space-between'>
            <Text fontSize="md">2g</Text>
            <Text fontSize="md">left 68gm</Text>
          </Flex>
        </Box>

         {/* Box2*/}

        <Box   w='30%' p='5px'>
        <Flex justifyContent='space-between'>
            <Text fontSize="md" color='grey'>Carbs</Text>
            <Text fontSize="md">7% calorie</Text>
          </Flex>
          <Box>
          <Stack spacing={5}>
             <Progress colorScheme='green' size='md' value={20} />
  
          </Stack>
          </Box>
          <Flex justifyContent='space-between'>
            <Text fontSize="md">2g</Text>
            <Text fontSize="md">left 68gm</Text>
          </Flex>
        </Box> 

         {/* Box3 */}

        <Box   w='30%' p='5px'>
        <Flex justifyContent='space-between'>
            <Text fontSize="md" color='grey'>Protein</Text>
            <Text fontSize="md">7% calorie</Text>
          </Flex>
          <Box>
          <Stack spacing={5}>
             <Progress colorScheme='green' size='md' value={20} />
  
          </Stack>
          </Box>
          <Flex justifyContent='space-between'>
            <Text fontSize="md">2g</Text>
            <Text fontSize="md">left 68gm</Text>
          </Flex>
        </Box>
      </Flex>
      <Box  h="150px">
      <Image src="./assets/calender.PNG" />
      </Box>
    </Box>
  );
};

export default Apple;
