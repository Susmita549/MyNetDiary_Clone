import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";


const Diets = () => {
  const [porductsData, setProductsData] = useState([]);
  const [selected, setSelected] = useState("");
  
  const sideMenu = [
   
    {
      category: "Diet Library",
      path: "diet-library",
      subCategory: [
        {
          subpath: "fresh-fruits",
          item: "Calorie Counting",
        },
        {
          subpath: "exotic-fruits",
          item: "Low-Carb Diet",
        },
        {
          subpath: "fruit-combos",
          item: "Keto Diet",
        },
        {
          subpath: "fruit-combos",
          item: "High-Protein Diet",
        },
        {
          subpath: "fruit-combos",
          item: "Low-Fat Diet",
        },
        {
          subpath: "fruit-combos",
          item: "Mediterranean Diet",
        },
        {
          subpath: "fruit-combos",
          item: "Vegetarian Diet",
        },
        {
          subpath: "fruit-combos",
          item: "Vegan Diet",
        },
      ],
    },
    {
      category: "Dietitian Team",
      path: "dietitian-team",
     
    },
    {
      category: "Dietitian's Blog",
      path: "dietitians-blog",
    },
    {
      category: "In the News",
      path: "in-the-news",
    },
  ];
  return (
    <Box p={"0 40px"}>
     
      <Flex>
        <Box width={"220px"} pr="10px">
          <Accordion allowToggle>
            {sideMenu.map((item) => (
              <AccordionItem
                key={item.category}
                border={"none"}
                borderBottom={"1px solid #eee"}
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
                          fontSize={"16px"}
                          fontWeight={600}
                          _hover={
                            {color:"#4fbb90"}
                          }
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
                    {item?.subCategory && item?.subCategory.map((subItem) => (
                     
                      <AccordionPanel
                        key={subItem.item}
                        pb={2}
                        fontSize="14px"
                        textAlign={"left"}
                        ml={2}
                        border={"1px solid #eee"}
                        borderLeft={"none"}
                        // onClick={() => {
                        //   // subItem.getProduct(subItem.item);
                        //   setLinkTag(` > ${item.category}`);
                        //   setSelected(subItem.item);
                        //   navigate(`/products/${item.path}/${subItem.subpath}`);
                        // }}
                        cursor="pointer"
                      >
                        <Flex
                          alignItems={"center"}
                          justifyContent="left"
                          gap={3}
                        >
                          <i className="fa-solid fa-angle-right"></i>{" "}
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
        <Box width={"100%"} pl="10px">
        
          <Grid
            width={"100%"}
            // border={"1px solid orange"}
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            {porductsData?.map((product) => (
              <Box key={product.id}>{"right side"}</Box>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};


export default Diets;
