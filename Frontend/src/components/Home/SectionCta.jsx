import React from 'react';
import {
  Box,
  Heading,
  Grid,
  Button,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';
const SectionCta = () => {
  return (
    <Box
      as="section"
      //   border={'1px solid green'}
      width={'100%'}
      position={'relative'}
      overflow={'hidden'}
      //   pt="20rem"
      background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat"
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
        zIndex: '1000',
      }}
    >
      <Box
        p={'10rem 0 1.6rem 0'}
        // pt="500px"
        background={
          'url(https://s3.amazonaws.com/img.mynetdiary.com/images/texture-noise@1x.png),radial-gradient(ellipse at top,#fdb941 0,#fc8a38 100%)'
        }
        overflow={'hidden'}
        borderBottomRightRadius="100rem 5rem"
        borderBottomLeftRadius="100rem 5rem"
      >
        <Box
          position={'relative'}
          zIndex="1000"
          _before={[
            '',
            '',
            {
              position: 'absolute',
              bottom: '-530px',
              left: '-22%',
              width: '50rem',
              height: '50rem',
              border: '1px dashed #d26511',
              rounded: '100%',
              content: '""',
              zIndex: '-1',
            },
          ]}
          _after={[
            '',
            '',
            '',
            {
              position: 'absolute',
              top: '-700px',
              left: '40%',
              width: '60rem',
              height: '60rem',
              border: '1px dashed #d26511',
              rounded: '100%',
              content: '""',
              zIndex: '-1',
            },
          ]}
        >
          <Box p="0 15px 0 15px" maxW={'1470px'} m="auto">
            <Flex
              flexDirection={['column', 'column', 'column', 'row']}
              justifyContent="space-between"
            >
              <Box
                textAlign={['center', 'center', 'center', 'left']}
                m={'auto'}
              >
                <Heading
                  color={'white'}
                  as={'h2'}
                  fontSize={['2.1rem', '2.2rem', '3rem', '3rem', '4rem']}
                  fontWeight={700}
                  mb={['3rem', '3rem', '3rem', '5rem']}
                >
                  Start Your Free
                  <br />
                  Food Diary Today
                </Heading>

                <Button
                  height="70px"
                  colorScheme="green"
                  background="linear-gradient(to bottom,#0dcb59 0,#0bab4b 100%)"
                  rounded={'50px'}
                  border="5px solid transparent"
                  borderColor="#9c8126"
                  fontSize={['1.5rem', '2rem']}
                  p={["30px 45px","35px 50px"]}
                  _hover={{
                    background:
                      'linear-gradient(to bottom,#0dd85f 0,#0bba51 100%)',
                  }}
                  onClick={() => console.log('someone clicked me')}
                >
                  SIGN UP
                </Button>
              </Box>
              <Box
                width={['90%', '90%', '90%', '56%']}
                m="auto"
                mb={['-1.8rem', '-2rem']}
                mt={['60px', '60px', '60px', '']}
              >
                <Image src="./assets/homepage/sectionCta.png" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionCta;
