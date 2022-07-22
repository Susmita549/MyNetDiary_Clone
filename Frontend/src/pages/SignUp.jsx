import React, { useState } from 'react';
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
  const [selectedStage, setSelectedStage] = useState(1);

  return (
    <>
      <Box className="main">
        <Box className="first">
          <Box className="layer">
            <Box className="first_layer"></Box>
          </Box>
        </Box>
        {selectedStage === 1 ? (
          <StageOne
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
          />
        ) : selectedStage === 2 ? (
          <StageTwo
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
          />
        ) : (
          <StageThree
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
          />
        )}
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

const StageOne = ({ selectedStage, setSelectedStage }) => {
  const handleStage1 = () => {
    setSelectedStage(selectedStage + 1);
    // console.log('someone clicked me');
  };
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
      <Button colorScheme="blue" marginTop="2rem" onClick={handleStage1}>
        NEXT
      </Button>
    </Box>
  );
};

const StageTwo = ({ selectedStage, setSelectedStage }) => {
  const handleStage2 = () => {
    setSelectedStage(selectedStage + 1);
    console.log('someone clicked me', selectedStage);
  };
  const handlePev = () => {
    setSelectedStage(selectedStage - 1);
    console.log('prev ', selectedStage);
  };
  return (
    <Box className="form_field">
      <Box className="form_header">Tell Us About Yourself</Box>

      <Box style={{ fontWeight: '500', color: '#3c9ec3' }}>
        To calculate your calorie and nutrient needs
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
      <Button colorScheme="blue" marginTop="2rem" onClick={handlePev}>
        BACK
      </Button>
      <Button colorScheme="blue" marginTop="2rem" onClick={handleStage2}>
        NEXT
      </Button>
    </Box>
  );
};
const StageThree = ({ selectedStage, setSelectedStage }) => {
  const handleStage3 = () => {
    console.log('This is signup page', selectedStage);
  };
  const handlePev = () => {
    setSelectedStage(selectedStage - 1);
    console.log('prev ', selectedStage);
  };
  return (
    <Box className="form_field">
      <Box className="form_header">SignUp</Box>

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
      <Button colorScheme="blue" marginTop="2rem" onClick={handlePev}>
        BACK
      </Button>
      <Button colorScheme="blue" marginTop="2rem" onClick={handleStage3}>
        NEXT
      </Button>
    </Box>
  );
};
