import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  textDecoration,
  Image,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import allData from '../db.json';

const Diets = () => {
  const [porductsData, setProductsData] = useState(
    allData.dietsLibrary.caloriesCounting.section
  );
  const [selected, setSelected] = useState('');
  console.log(allData.dietsLibrary.caloriesCounting.section);
  const sideMenu = [
    {
      category: 'Diet Library',
      path: 'diet-library',
      subCategory: [
        {
          subpath: 'fresh-fruits',
          item: 'Calorie Counting',
          logo: './assets/dietpage/CalorieCounting.svg',
        },
        {
          subpath: 'exotic-fruits',
          item: 'Low-Carb Diet',
          logo: './assets/dietpage/Low-cardDiet.svg',
        },
        {
          subpath: 'fruit-combos',
          item: 'Keto Diet',
        },
        {
          subpath: 'fruit-combos',
          item: 'High-Protein Diet',
        },
        {
          subpath: 'fruit-combos',
          item: 'Low-Fat Diet',
        },
        {
          subpath: 'fruit-combos',
          item: 'Mediterranean Diet',
        },
        {
          subpath: 'fruit-combos',
          item: 'Vegetarian Diet',
        },
        {
          subpath: 'fruit-combos',
          item: 'Vegan Diet',
        },
      ],
    },
    {
      category: 'Dietitian Team',
      path: 'dietitian-team',
    },
    {
      category: "Dietitian's Blog",
      path: 'dietitians-blog',
    },
    {
      category: 'In the News',
      path: 'in-the-news',
    },
  ];
  return (
    <Box p={'0 40px'}>
      <Flex>
        <Box width={'220px'} pr="10px">
          <Accordion allowToggle>
            {sideMenu.map(item => (
              <AccordionItem
                key={item.category}
                border={'none'}
                borderBottom={'1px solid #eee'}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {/* {isExpanded ? (
                          <MinusIcon fontSize="12px" color={"#4fbb90"} />
                        ) : (
                          <AddIcon fontSize="12px" color={"#4fbb90"} />
                        )} */}
                        <Box
                          flex="1"
                          textAlign="left"
                          ml={3}
                          fontSize={'16px'}
                          fontWeight={600}
                          _hover={{ color: '#4fbb90' }}
                          // onClick={() => {

                          //   setLinkTag(` > ${item.category}`);
                          //   setSelected(item.subCategory[0].item);
                          //   navigate(
                          //     `/products/${item.path}/${item.subCategory[0]?.subpath}`
                          //   );
                          //   preTag.current = ` > ${item.category}`;
                          // }}
                          cursor="pointer"
                        >
                          {item.category}
                        </Box>
                      </AccordionButton>
                    </h2>
                    {item?.subCategory &&
                      item?.subCategory.map(subItem => (
                        <AccordionPanel
                          key={subItem.item}
                          pb={2}
                          fontSize="14px"
                          textAlign={'left'}
                          ml={2}
                          border={'1px solid #eee'}
                          borderLeft={'none'}
                          // onClick={() => {
                          //   setSelected(subItem.item);
                          //   let newData = [
                          //     {
                          //       id: subItem.item,
                          //       name: subItem.item,
                          //     },
                          //   ];
                          //   setProductsData([...newData]);
                          // }}
                          cursor="pointer"
                        >
                          <Flex
                            alignItems={'center'}
                            justifyContent="left"
                            gap={3}
                          >
                            {subItem.logo && (
                              <Image src={subItem.logo} h="10px" w="10px" />
                            )}
                            <Text>{subItem.item}</Text>
                          </Flex>
                        </AccordionPanel>
                      ))}
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box width={'100%'} pl="10px">
          {porductsData &&
            porductsData?.map(product => (
              <Box key={uuidv4()} border={'1px solid red'}>
                <Heading as="h3" textAlign="left">
                  {product.heading}
                </Heading>

                <Grid
                  width={'100%'}
                  border={'1px solid orange'}
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                >
                  {product.data?.map(item => (
                    <Box key={item.id}>
                      <Box as="a" href={item.href} target="_blank">
                        <Image src={item.imgUrl} />
                      </Box>
                      <Heading as="h5" fontSize="18px">
                        {item.name}
                      </Heading>
                      <Text>{item.description}</Text>
                    </Box>
                  ))}
                </Grid>
              </Box>
            ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Diets;
