import React from 'react';
import { Box, Heading, Divider } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Helmet>
        <title> اعمل مع المتوسط</title>
      </Helmet>
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
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Heading size="lg" m="4">
          لا توجد حالياً مواقع شاغرة يمكنكم إرسال سيرة الخبرة الذاتية على هذا
          الإيميل: work@almutawassit.org
        </Heading>
      </Box>
    </Box>
  );
}
