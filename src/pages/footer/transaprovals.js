import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Helmet>
        <title>موافقات الترجمة</title>
      </Helmet>
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        موافقات الترجمة
        <Divider
          opacity="1"
          border="3px solid black"
          pl="20%"
          pr="20%"
          mt="4"
          borderColor="black"
          w="20%"
        ></Divider>
      </Heading>
      <Box
        textAlign="right"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Text fontSize="2xl" m="4">
          الرجاء التواصل على الإيميل:
        </Text>
        <Text fontSize="2xl" m="4">
          info@almutawassit.org
        </Text>
      </Box>
    </Box>
  );
}
