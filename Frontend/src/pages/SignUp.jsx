import React from 'react';
import {
  Box,
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  Stack,
  Radio,
  Button,
  RadioGroup,
} from '@chakra-ui/react';
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
        <StageOne />
      </Box>
      <Flex
        style={{
          zIndex: '10',
          position: 'absolute',
          bottom: '-300px',
          left: '28%',
        }}
      >
        By signing up, you are agreeing to the{' '}
        <span style={{ color: '#3c9ec3' }}>Terms of Service</span>
      </Flex>
    </>
  );
};

export default SignUp;

const StageOne = () => {
  return (
    <Box className="form_field">
      <Box className="form_header">Tell Us About Yourself</Box>
      <InputGroup w="50%" m="auto" marginTop="2rem">
        <InputRightElement pointerEvents="none" children={'lb'} />
        <Input
          name="curWeight"
          placeholder="How much do you weigh?"
          border="none"
          borderRadius="none"
          borderBottom="1px solid black"
          marginBottom="2rem"
        />
      </InputGroup>
      <InputGroup w="50%" m="auto" marginTop="2rem">
        <InputRightElement pointerEvents="none" children={'lb'} />
        <Input
          name="targetWeight"
          placeholder="What is your target weight?

      "
          border="none"
          borderRadius="none"
          borderBottom="1px solid black"
          marginBottom="2rem"
        />
      </InputGroup>
      <Box style={{ fontWeight: '500', color: '#3c9ec3' }}>
        Convert to Metric unit (kg,cm)
      </Box>
      <Box>
        <Box marginLeft="-12rem" marginBottom="2rem">
          Your desire progress
        </Box>
        <Box marginLeft="12rem">
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="column">
              <Radio colorScheme="green" value="1" border="red">
                Lose 1 lb/week
              </Radio>
              <Radio colorScheme="green" value="2">
                Lose 1½ lb/week
              </Radio>
              <Radio colorScheme="green" value="3">
                Lose 2 lbs/week
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <Button colorScheme="blue" marginTop="2rem">
        NEXT
      </Button>
    </Box>
  );
};
