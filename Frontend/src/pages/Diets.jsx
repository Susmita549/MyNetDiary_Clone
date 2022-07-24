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

import icon1 from '../assets/dietpage/CalorieCounting.svg';
import icon2 from '../assets/dietpage/Low-cardDiet.svg';
import icon3 from '../assets/dietpage/KetoDiet.svg';
import icon4 from '../assets/dietpage/HighProteinDiet.svg';
import icon5 from '../assets/dietpage/LowfatDiet.svg';
import icon6 from '../assets/dietpage/MediterraneamDiet.svg';
import icon7 from '../assets/dietpage/VegeterianDiet.svg';
import icon8 from '../assets/dietpage/VeganDiet.svg';

import allData from '../db.json';

const Diets = () => {
  const [porductsData, setProductsData] = useState(
    allData.dietsLibrary.caloriesCounting
  );
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const { subcategory } = useParams();
  // console.log('path:', subcategory);
  // console.log(porductsData);
  const setData = path => {
    switch (path) {
      case 'diet-library':
        return setProductsData(allData.dietsLibrary.caloriesCounting);

      case 'Calorie-Counting':
        return setProductsData(allData.dietsLibrary.caloriesCounting);
      case 'Low-Carb-Diet':
        return setProductsData(allData.dietsLibrary.LowCarbDiet);
      case 'Keto-Diet':
        return setProductsData(allData.dietsLibrary.KetoDietLibrary);
      case 'High-Protein-Diet':
        return setProductsData(allData.dietsLibrary.HighProteinDiet);
      case 'Low-Fat-Diet':
        return setProductsData(allData.dietsLibrary.LowFatDiet);
      case 'Mediterranean-Diet':
        return setProductsData(allData.dietsLibrary.MediterraneanDiet);
      case 'Vegetarian-Diet':
        return setProductsData(allData.dietsLibrary.VegetarianDiet);
      case 'Vegan-Diet':
        return setProductsData(allData.dietsLibrary.VeganDiet);
      case 'dietitian-team':
        return setProductsData(allData.dietitianTeam.dietitianTeam);
      case 'dietitians-blog':
        return setProductsData(allData.dietitianBlog.dietitianBlog);

      default:
        return setProductsData(allData.dietsLibrary.caloriesCounting);
    }
  };

  useEffect(() => {
    setData(subcategory);
  }, [subcategory]);
  return (
    <Box p={'0 40px'} borderLeft={'100px'} width={'100%'} mt="75px">
      <Flex>
        <Box width={'35%'} pr="10px">
          <Accordion allowToggle>
            {sideMenu.map(item => (
              <AccordionItem
                key={item.category}
                border={'none'}
                borderBottom={'2px dashed #eee'}
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
                          fontSize={'25px'}
                          fontWeight={600}
                          color={'#268fd0'}
                          _hover={{
                            color: '#46618a',
                            textDecoration: 'underline',
                          }}
                          onClick={() => {
                            setSelected(item.category);
                            // handleUpdateData(item.path);
                            if (item.path === 'dietitians-blog') {
                              navigate(`/library/dietitians-blog/${item.path}`);
                            } else if (item.path === 'dietitian-team') {
                              navigate(`/library/dietitian-team/${item.path}`);
                            } else {
                              navigate(`/library/diets/${item.path}`);
                            }
                          }}
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
                          fontSize="25px"
                          textAlign={'left'}
                          ml={2}
                          border={'1px dashed #eee'}
                          borderLeft={'none'}
                          borderRight={'none'}
                          color={'#46618a'}
                          fontWeight={600}
                          _hover={{ textDecoration: 'underline' }}
                          onClick={() => {
                            setSelected(subItem.item);
                            // handleUpdateData(subItem.subpath);

                            navigate(`/library/diets/${subItem.subpath}`);
                          }}
                          cursor="pointer"
                        >
                          <Flex
                            alignItems={'center'}
                            justifyContent="left"
                            gap={3}
                          >
                            {subItem.logo && (
                              <Image src={subItem.logo} h="25px" w="25px" />
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
        <Box
          width={'100%'}
          // border={'1px solid red'}
          flexWrap={'wrap'}
          justify-content={'space-between'}
          order={'2'}
          boxSizing={'inherit'}
          fontWeight={400}
          fontSize={'10px'}
          color={'#46618a'}
          textAlign={'left'}
          lineHeight={1.5}
          pl="10px"
        >
          <Box mb="30px" fontSize="18px" fontWeight={'500'}>
            {porductsData.message ? porductsData.message : ''}
          </Box>
          {porductsData &&
            porductsData?.section.map(product => (
              <Box key={uuidv4()}>
                <Heading
                  as="h3"
                  textAlign="left"
                  marginBottom={'20px'}
                  color={'#268fd0'}
                  fontSize="57px"
                >
                  {product.heading}
                </Heading>

                <Grid
                  width={'100%'}
                  templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                  gap={['2rem', '3rem', '5rem']}
                  borderColor={'#eaeaea'}
                >
                  {product.data?.map(item => (
                    <Box
                      key={item.id}
                      fontSize={'16px'}
                      borderRadius={'15px'}
                      display={'flex'}
                      flexDirection="column"
                      minWidth={'230px'}
                      backgroundColor={'#fff'}
                      fontWeight={'400'}
                      color={'#46618a'}
                      textAlign="left"
                      boxShadow={'rgb(219 213 208 / 78%) 0 3px 6px'}
                    >
                      <Box>
                        <Box as="a" href={item.href} target="_blank">
                          <Image src={item.imgUrl} rounded="15px 15px 0 0" />
                        </Box>
                        <Box p={['1rem', '2rem']}>
                          {item?.date ? (
                            <Flex gap={2}>
                              <Image src="./assets/dietpage/calender.svg" />
                              <Text>{item.date}</Text>
                            </Flex>
                          ) : (
                            ''
                          )}
                          <Heading
                            as="h5"
                            fontSize="32px"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            {item.name}
                          </Heading>
                          {item?.specialist ? (
                            <Heading
                              as="h4"
                              color={'#268fd0'}
                              fontSize="22px"
                              fontWeight={'700'}
                            >
                              {item?.specialist}
                            </Heading>
                          ) : (
                            ''
                          )}

                          {item?.date ? (
                            ''
                          ) : (
                            <Box
                              width="80px"
                              height="5px"
                              borderTop="3px solid #E2E8F0"
                              m={['10px 0 10px 0', '20px 0 20px 0']}
                            ></Box>
                          )}
                          {item?.para1 ? (
                            <Text as="i" fontSize="18px" mt="10px">
                              {item.para1}
                            </Text>
                          ) : (
                            ''
                          )}

                          <Text fontSize="18px" mt="10px" fontWeight="500">
                            {item.description}
                          </Text>
                        </Box>
                      </Box>
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

const sideMenu = [
  {
    category: 'Diet Library',
    path: 'diet-library',
    color: '#46618a',
    subCategory: [
      {
        subpath: 'Calorie-Counting',
        item: 'Calorie Counting',
        logo: icon1,
      },
      {
        subpath: 'Low-Carb-Diet',
        item: 'Low-Carb Diet',
        logo: icon2,
      },
      {
        subpath: 'Keto-Diet',
        item: 'Keto Diet',
        logo: icon3,
      },
      {
        subpath: 'High-Protein-Diet',
        item: 'High-Protein Diet',
        logo: icon4,
      },
      {
        subpath: 'Low-Fat-Diet',
        item: 'Low-Fat Diet',
        logo: icon5,
      },
      {
        subpath: 'Mediterranean-Diet',
        item: 'Mediterranean Diet',
        logo: icon6,
      },
      {
        subpath: 'Vegetarian-Diet',
        item: 'Vegetarian Diet',
        logo: icon7,
      },
      {
        subpath: 'Vegan-Diet',
        item: 'Vegan Diet',
        logo: icon8,
      },
    ],
  },
  {
    category: 'dietitian team',
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
