import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

export default function four() {
  return (
    <Box mt="100px" mb="100px" textAlign="center">
      <Helmet>
        <title> أسئلة متكررة</title>
      </Helmet>
      <Heading fontFamily="diodrum-med !important" mt="8" size="xl">
        الصفحة تحت البناء
      </Heading>
    </Box>
  );
}
