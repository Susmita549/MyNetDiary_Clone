import React from 'react';
import { Box, Flex, Link, Text, Image,Stack,Progress } from '@chakra-ui/react';
import Apple from './Apple';
const Body = () => {
  return (
    <div>
      <Flex  h="1010px" w="1170px" m="20px auto">
        {/* Left Box */}
        <Box  w="580px" h="1010px">
          {/* Left Box 1*/}
          <Box
            
            h="595"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Apple />
          </Box>
          {/* Left Box 2*/}
          <Box
            
            h="130"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Flex
             
              h="70px"
              p="5px"
              justifyContent={'space-around'}
            >
              <Box  w="10%">
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/15_search_global@3x.png"
                  alt="box"
                />
              </Box>
              <Box  w="85%">
                <Text fontSize="lg" textAlign={'left'}>
                  Import, customize, and log recipes from your favorite websites
                  with our Recipe Import feature.
                </Text>
              </Box>
            </Flex>
            <Flex
             
              h="50px"
              m="5px"
              justifyContent="right"
              p="10px"
            >
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration='none'>
                    MORE
                  </Link>
             
              </Box>
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    MY DEVICE
                  </Link>
                
              </Box>
            </Flex>
          </Box>
          {/* Left Box 3*/}
          <Box
           
            h="230"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Flex
             
              h="70px"
              p="5px"
              justifyContent={'space-around'}
            >
              <Box w="10%">
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/plan/nutrition_target.png"
                  alt="box"
                />
              </Box>
              <Flex  w="85%"
              justifyContent="left"
              alignItems="center" 
              color="grey">
                <Text fontSize="sm" textAlign={'left'}>
                  Nutrients
                </Text>
              </Flex>
            </Flex>


            
            <Flex
             
              h="70px"
              p="5px"
              justifyContent={'space-around'}
            >
              <Box w="30%" p='15px'>
              <Text fontSize="lg" textAlign={'left'} color="grey">
                 Sodium
                </Text>
              </Box>
              <Box  w="70%" >
              <Stack>
              <Progress colorScheme='green' size='sm' value={80} />
  
              </Stack>
              </Box>
            </Flex>


            <Flex
             
              h="50px"
              m="5px"
              justifyContent="right"
              p="10px"
            >
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    DAY REPORT
                  </Link>
                
              </Box>
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    FOOD LOG
                  </Link>
                
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* Right Box */}
        <Box w="580px" h="1010px">
          {/* Right Box 1*/}
          <Box
           
            h="140"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Flex
             
              h="70px"
              p="5px"
              justifyContent={'space-around'}
            >
              <Box w="10%" p="10px">
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/icon_analysis.png"
                  alt="box"
                />
              </Box>
              <Box  w="85%">
                <Text fontSize="lg" textAlign={'left'}>
                  Please log more than 400 food calories to get weight forecast
                  and diet tips.
                </Text>
              </Box>
            </Flex>
            <Flex
              
              h="70px"
              p="5px"
              justifyContent={'right'}
              px="30px"
            >
              
                <Link fontSize="md" color="#2ca6db" textDecoration={'none'}>
                  DATA ANALYSIS
                </Link>
            
            </Flex>
          </Box>
          {/* Right Box 2*/}
          <Box
           
            h="190"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Flex
             
              h="60px"
              m="5px"
              justifyContent={'space-around'}
            >
              <Box w="13%" p="10px">
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/target_icon.png"
                  alt="box"
                />
              </Box>
              <Flex
                justifyContent="left"
                alignItems="flex-end"
               
                w="85%"
              >
                <Text fontSize="lg">Weight Plan: 1 lb away.</Text>
              </Flex>
            </Flex>
            <Flex
              
              h="60px"
              m="5px"
              justifyContent={'space-around'}
            >
              <Box  w="13%" p="10px">
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png"
                  alt="box"
                />
              </Box>
              <Flex
                justifyContent="left"
                alignItems="flex-end"
                w="85%"
              >
                <Text fontSize="lg">Current Weight: 50 lb.</Text>
              </Flex>
            </Flex>
            <Flex
              h="50px"
              m="5px"
              justifyContent="right"
              p="10px"
            >
              <Box m="0 10px">
               
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    WEIGH
                  </Link>
                
              </Box>
              <Box m="0 10px">
               
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    PLAN
                  </Link>
               
              </Box>
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    CHART
                  </Link>
                
              </Box>
            </Flex>
          </Box>
          {/* Right Box 3*/}
          <Box
            
            h="160"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Image
              src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/premium_try_and_tweak_banner.jpeg"
              width="100%"
              height="100%"
              alt=""
            />
          </Box>
          {/* Right Box 4*/}
          <Box
          
            h="450"
            m="15px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Flex
              
              h="130px"
              p="5px"
              justifyContent={'space-around'}
            >
              <Box w="30%" p='10px'>
                <Image
                  src="https://s3.amazonaws.com/img.mynetdiary.com/blog/tracking-diabetes-2.jpeg"
                  alt="box"
                  borderRadius={'5px'}
                />
              </Box>
              <Box  w="70%" p='5px'>
                <Text fontSize="xl" textAlign={'left'}>
                Gain easier control over blood sugar with these diabetes tracking tips from MyNetDiary
                </Text>
              </Box>
            </Flex>
           <Box>
            <Text fontSize="md"  m="5px">
            Learn to use MyNetDiary to its fullest as a powerful diabetes tracking tool.
            </Text>
           </Box>
            <Flex
              
              h="50px"
              m="5px"
              justifyContent="right"
              p="10px"
            >
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    BLOG
                  </Link>
                
              </Box>
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    LIBRARY
                  </Link>
                
              </Box>
              <Box m="0 10px">
                
                  <Link fontSize="md" color="#2ca6db" textDecoration="none">
                    MY ADVICE
                  </Link>
                
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Body;
