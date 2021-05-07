import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Helmet>
        <title>اتصل بنا</title>
      </Helmet>
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        اتصل بنا
        <Divider
          opacity="1"
          border="3px solid black"
          pl="20%"
          pr="20%"
          //   m="4"
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
          المكتب الرئيس
        </Heading>
        <Text fontSize="2xl" m="4">
          Almutawassit Books
        </Text>
        <Text fontSize="2xl" m="4">
          Alzaia Navilio Pavese, 120
        </Text>
        <Text fontSize="2xl" m="4">
          20142 Milano
        </Text>
        <Text fontSize="2xl" m="4">
          Italy
        </Text>
        <Divider></Divider>
        <Heading size="lg" m="4">
          {' '}
          هيئة التحرير والنشر
        </Heading>
        <Text fontSize="2xl" m="4">
          مدير النشر: خالد بن صالح
        </Text>
        <Text fontSize="2xl" m="4">
          editor@almutawassit.org
        </Text>
        <Divider></Divider>

        <Heading size="lg" m="4">
          {' '}
          مشاريع النشر والتبادل الثقافي:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          المدير العام: خالد سليمان الناصري{' '}
        </Text>
        <Text fontSize="2xl" m="4">
          Khaled@almutawassit.org
        </Text>
        <Divider></Divider>
        <Heading size="lg" m="4">
          {' '}
          التواصل العام
        </Heading>
        <Text fontSize="2xl" m="4">
          info@almutawassit.org{' '}
        </Text>
      </Box>
    </Box>
  );
}
