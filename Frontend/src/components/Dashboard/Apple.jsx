import React from 'react';
import { Box ,Flex} from '@chakra-ui/react';
const Apple = () => {
  return (
    <Box>
      <Flex border='1px dashed black' h='350px'>
        <Box border='1px dashed blue' w='25%'></Box>
        <Box border='1px dashed blue' w='50%'></Box>
        <Box border='1px dashed blue' w='25%'></Box>
      </Flex>
        <Box border='1px dashed black' h='100px'></Box>
        <Box border='1px dashed black' h='40px'></Box>
        <Box border='1px dashed black' h='100px'></Box>
    </Box>
  );
};

export default Apple;
