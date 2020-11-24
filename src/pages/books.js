import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import SingleCatBooks from '../components/books/SingleCatBooks';

export default function Books() {
  let { category } = useParams();
  console.log(category);
  return (
    <Box mt="50px" mb="100px" p="8">
      <Box textAlign="center" m="8">
        <Heading>{category}</Heading>
      </Box>
      <SingleCatBooks category={category}></SingleCatBooks>
    </Box>
  );
}
