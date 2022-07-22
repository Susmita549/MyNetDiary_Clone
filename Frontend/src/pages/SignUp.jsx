import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import './signup.css';

const SignUp = () => {
  return (
    <>
      <Box className="main">
        <Box className="first">
          <Box className="layer">
            <Box className="first_layer"></Box>
          </Box>
        </Box>
        <Box className="form_field">
          <Box className="form_header">Tell Us About Yourself</Box>
        </Box>
      </Box>
      <Flex
        style={{
          zIndex: '10',
          position: 'absolute',
          bottom: '-300px',
          left: '28%',
        }}
      >
        By signing up, you are agreeing to the Terms of Service
      </Flex>
    </>
  );
};

export default SignUp;
