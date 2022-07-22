import React, { useRef } from 'react';
import { Box, Heading, Image, Text, Flex, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { v4 as uuidv4 } from 'uuid';
import { BsFillCaretRightFill } from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const StorySlider = () => {
  const data = useRef(StoryData);

  return (
    <Box
      as="section"
      //   border={'1px solid green'}
      width={'100%'}
      position={'relative'}
      overflow={'hidden'}
      //   pt="20rem"

      _before={{
        position: 'absolute',
        display: 'block',
        width: '100%',
        top: '-53rem',
        height: '58rem',
        content: '""',
        background: '#fff',
        // border: '2px solid red',
        borderBottomRightRadius: '100rem 5rem',
        borderBottomLeftRadius: '100rem 5rem',
        zIndex: '1',
        boxShadow: 'rgb(9 108 46 / 36%) 0 -2.2rem 8.2rem',
      }}
    >
      <Box
        p={'10rem 0 1.6rem 0'}
        // pt="500px"
        background={
          'url(https://s3.amazonaws.com/img.mynetdiary.com/images/texture-noise@1x.png),radial-gradient(ellipse at top,#05b24a 0,#05963d 100%)'
        }
        overflow={'hidden'}
        borderBottomRightRadius="100rem 5rem"
        borderBottomLeftRadius="100rem 5rem"
      >
        <Box
          mt={['-160px', '-160px', '0', '0']}
          mb={['0', '0', '-20px', '-35px']}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.current &&
              data.current?.map((item, index) => (
                <SwiperSlide key={uuidv4()}>
                  <Slider item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default StorySlider;

const Slider = ({ item }) => {
  return (
    <Flex
      flexDirection={['column', 'column', 'row', 'row']}
      // position="relative"
      pt={('500px', '0px')}
      width="100%"
      height={'100%'}
      pl="20px"
      pr="20px"
      minH={['auto', 'auto', '490px', '664px']}
    >
      <Box height="100%" placeSelf={['center', 'center', 'end', 'center']}>
        <Box
          zIndex={1000}
          display={['block', 'block', 'none', 'none']}
          m="auto"
        >
          <Box
            width={'215px'}
            height={'215px'}
            border={'1px solid rgba(5, 96, 0, 0.3)'}
            rounded="50%"
            display={'flex'}
            justifyContent={'center'}
            alignItems="center"
            m="auto"
          >
            <Box
              as="figure"
              width={'200px'}
              height={'200px'}
              rounded="50%"
              overflow={'hidden'}
              p="20px"
              background={'#f6f2ec'}
            >
              <Image
                src={item.imgUrl}
                m="auto"
                height="200px"
                ml={item.marginl ? item.marginl : ''}
                mr={item.marginr ? item.marginr : ''}
              />
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} alignItems="flex-end" justifyContent={'flex-end'}>
          <Image
            src={item.imgUrl}
            maxW={['auto', 'auto', '420px', '604px']}
            maxH={['auto', 'auto', '460px', '624px']}
            display={['none', 'none', 'block', 'block']}
            mb="-20px"
          />
        </Box>
      </Box>
      <Box textAlign={['center', 'center', 'left', 'left']}>
        <Heading
          as="h2"
          fontWeight={500}
          fontSize={['35px', '30px', '50px', '70px']}
          mb={['15px', '15px', '15px', '']}
          color="white"
        >
          {item.name}
        </Heading>
        <Box
          fontWeight={700}
          fontSize={['14px', '20px', '22px', '26px']}
          mb={['15px', '15px', '15px', '']}
          color="white"
          textTransform={'uppercase'}
        >
          {item.benefits}
        </Box>

        <Box
          fontWeight={500}
          fontSize={['14px', '20px', '22px', '26px']}
          mb={['15px', '15px', '15px', '']}
          color="#fcf8b3"
          maxW={'600px'}
        >
          {item.message}
        </Box>

        <Button
          mt="2rem"
          variant="outline"
          height={['50px', '60px']}
          rounded={'50px'}
          color="white"
          colorScheme={''}
          border="2px solid transparent"
          borderColor="rgba(5,96,0,.3)"
          fontSize={['1.1rem', '1.4rem']}
          p={['25px 20px', '35px 40px']}
          textTransform={'uppercase'}
          mb={['45px', '35px', '25px', '']}
          _hover={{
            borderColor: '#fcf8b3',
          }}
          _active={{
            borderColor: '#0bb850',
            backgroundColor: '#0bb850',
          }}
        >
          Read Success Story
          <Box ml={3}>
            <BsFillCaretRightFill />
          </Box>
        </Button>
      </Box>
    </Flex>
  );
};

const StoryData = [
  {
    name: 'Julie Martel',
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-julie@1x.png',
    benefits: (
      <Text>
        LOST 71 LB (35%) AND MAINTAINED <br />
        AFTER 492 DAYS.'
      </Text>
    ),
    message: (
      <Text>
        “My life changed.
        <br /> My life is beautiful!
        <br /> I am beautiful!!!”
      </Text>
    ),
    marginl: '-30px',
  },
  {
    name: 'Carrie Hammond',
    benefits: (
      <Text>
        LOST AND MAINTAINED 103 LBS (40%) <br /> AFTER 616 DAYS.
      </Text>
    ),
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-carrie@1x.png',
    message: (
      <Text>
        “I love having a desire to go out and experience new things without
        worrying about if I'm too fat to do something.”
      </Text>
    ),
  },
  {
    name: 'Paul Reynolds',
    benefits: (
      <Text>
        Lost 50lb (22%) and maintained <br /> after 345 days.
      </Text>
    ),
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/images/success-paul-reynolds@1x.png',
    message: (
      <Text>
        “The ability to track using MyNetDiary has been so important.”
      </Text>
    ),
    marginl: '-20px',
  },
  {
    name: 'Joe Balfe',
    benefits: (
      <Text>
        LOST 65LB (20%) AND MAINTAINED <br /> AFTER 216 DAYS.
      </Text>
    ),
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-joe@1x.png',
    message: (
      <Text>
        “MyNetDiary helps me know exactly how many calories I consume.”
      </Text>
    ),
  },
  {
    name: 'Rick White',
    benefits: (
      <Text>
        LOST 91 LB (30%) AND MAINTAINED <br /> AFTER 881 DAYS.
      </Text>
    ),
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/images/success-rick-white@1x.png',
    message: (
      <Text>
        “I went body surfing for 4 hours straight with my 28 year old son and
        felt great!”
      </Text>
    ),
    marginl: '-20px',
  },
  {
    name: 'Matthew Warner',
    benefits: (
      <Text>
        LOST 29LB (14%) AND MAINTAINED <br /> AFTER 379 DAYS.
      </Text>
    ),
    imgUrl:
      'https://s3.amazonaws.com/img.mynetdiary.com/images/success-matthew-warner@1x.png',
    message: (
      <Text>
        “I used your product religiously for two years and it made a huge
        difference in my health and happiness.”
      </Text>
    ),
    marginr: '-10px',
  },
];
