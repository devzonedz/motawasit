import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import SingleCatBooks from '../components/books/SingleCatBooks';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let translate = query.get('translate');
  console.log(translate);

  let { category } = useParams();
  console.log(category);
  return (
    <Box mr="80px" mt="100px" mb="100px">
      <Box textAlign="center" m="8">
        <Heading>{category}</Heading>
      </Box>
      <SingleCatBooks
        translate={translate}
        category={category}
      ></SingleCatBooks>
    </Box>
  );
}
