import React from 'react';
import { Button, Box, Image } from '@chakra-ui/react';
import { BsFillAlarmFill, BsFillChatSquareTextFill } from 'react-icons/bs';
import { GrAccessibility } from 'react-icons/gr';
const Chakraui = () => {
  return (
    <div>
      chakraui
      <Button
        leftIcon={<BsFillAlarmFill color="blue" />}
        colorScheme="teal"
        variant="solid"
      >
        Email
      </Button>
      <Box>
        <Image src="./assets/homepage/twitter.svg"/>
      </Box>
    </div>
  );
};

export default Chakraui;
