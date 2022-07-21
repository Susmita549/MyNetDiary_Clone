import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

import InsightsCards from '../components/Home/InsightsCards';
import SectionCta from '../components/Home/SectionCta';
import SectionCompatible from '../components/Home/SectionCompatible';
import SectionBlog from '../components/Home/SectionBlog';

const Home = () => {
  return (
    <Box>
      <Box>
        <Text> Home Page</Text>
        <svg width="265" height="291.5" style="cursor: pointer;">
          <path
            strokeWidth="17.666666666666668"
            stroke="#EEEEEE"
            fill="none"
            strokeLinecap="round"
            d=" M 132.5 70.96700000000001 C 322.6375 -5.735701074999994 257.71250000000003 331.7563677416667 135.59166666666667 265.79213225833337 C 7.2875000000000005 331.7563677416667 -57.637499999999996 -5.735701074999994 132.5 70.96700000000001 Z"
            strokeDasharray="761.4857622822249"
          ></path>
          <g>
            <defs>
              <linearGradient id="gg1" x1="0" y1="0" x2="1" y2="0">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="50%"
                  style="stop-color: rgb(148, 227, 38);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(125, 218, 31);"
                ></stop>
              </linearGradient>
              <linearGradient id="gg2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="49%"
                  style="stop-color: rgb(125, 218, 31);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(102, 209, 24);"
                ></stop>
              </linearGradient>
              <linearGradient id="gg3" x1="1" y1="0" x2="0" y2="0">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="49%"
                  style="stop-color: rgb(102, 209, 24);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(76, 198, 16);"
                ></stop>
              </linearGradient>
              <linearGradient id="gg4" x1="0" y1="1" x2="0" y2="0">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop offset="51%" style="stop-color: rgb(76, 198, 16);"></stop>
                <stop offset="100%" style="stop-color: rgb(53, 189, 9);"></stop>
              </linearGradient>
              <linearGradient id="gr1" x1="0" y1="0" x2="1" y2="0">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="50%"
                  style="stop-color: rgb(252, 160, 160);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(250, 142, 141);"
                ></stop>
              </linearGradient>
              <linearGradient id="gr2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="48%"
                  style="stop-color: rgb(250, 142, 141);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(246, 122, 121);"
                ></stop>
              </linearGradient>
              <linearGradient id="gr3" x1="1" y1="0" x2="0" y2="0">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="49%"
                  style="stop-color: rgb(246, 122, 121);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(243, 102, 101);"
                ></stop>
              </linearGradient>
              <linearGradient id="gr4" x1="0" y1="1" x2="0" y2="0">
                <stop
                  offset="0%"
                  style="stop-color: rgb(255, 255, 255);"
                ></stop>
                <stop
                  offset="50%"
                  style="stop-color: rgb(243, 102, 101);"
                ></stop>
                <stop
                  offset="100%"
                  style="stop-color: rgb(239, 82, 80);"
                ></stop>
              </linearGradient>
            </defs>
            <path
              strokeWidth="17.666666666666668"
              stroke="url(#gg1)"
              fill="none"
              strokeDasharray="113.0672050640547 761.4857622822249"
              strokeLinecap="round"
              d=" M 132.5 70.96700000000001 C 322.6375 -5.735701074999994 257.71250000000003 331.7563677416667 135.59166666666667 265.79213225833337 C 7.2875000000000005 331.7563677416667 -57.637499999999996 -5.735701074999994 132.5 70.96700000000001 Z"
            ></path>
            <path
              fill="#EEEEEE"
              d=" M 132.5 61.427 L 132.5 79.80033333333333 L 130.73333333333332 79.80033333333333 L 121.89999999999999 76.70866666666666 L 121.89999999999999 58.600333333333325 Z"
            ></path>
          </g>
          <path
            fill="#ef5250"
            d=" M 132.5 53.300333333333334 C 118.4844362 40.293236308333334 126.72888724 2.95035188333334 139.92000000000002 12.225333333333339 C 158.05777448 24.150350558333336 133.32444362 25.223599233333335 132.5 53.300333333333334 Z"
          ></path>
          <g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="#35bd09"
              fontSize="25"
            >
              181
            </text>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              dy="-0.5em"
              fill="#9f9d9a"
              fontSize="15"
            >
              Left
            </text>
            <text
              x="50%"
              y="75%"
              textAnchor="middle"
              fill="#9f9d9a"
              fontSize="25"
            >
              1,038
            </text>
          </g>
        </svg>
      </Box>
      <Box>
        <Image src="./assets/apple.svg" />
      </Box>
      <InsightsCards />
      <SectionBlog />
      <SectionCompatible />
      <SectionCta />
    </Box>
  );
};

export default Home;
