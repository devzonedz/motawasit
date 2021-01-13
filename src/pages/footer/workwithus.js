import React from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  ListItem,
  OrderedList,
} from '@chakra-ui/core';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        اعمل مع المتوسط{' '}
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
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Heading size="lg" m="4">
          {' '}
          لا توجد حالياً مواقع شاغرة يمكنكم تحميل سيرة الخبرة الذاتية هنا
        </Heading>
      </Box>
    </Box>
  );
}
