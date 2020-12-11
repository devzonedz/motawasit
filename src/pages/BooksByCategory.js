import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import SingleCatBooks from '../components/books/SingleCatBooks';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let translate = query.get('translate');
  let category = query.get('category');
  console.log(translate);

  //   let { category } = useParams();
  //   console.log(category);
  return (
    <Box>
      <BooksFilter></BooksFilter>
      <Box mr={['0', '80px']} mt="160px" mb="100px">
        <Box m="8">
          <Heading fontFamily="diodrum-bold !important">{category}</Heading>
        </Box>
        <SingleCatBooks
          translate={translate}
          category={category}
        ></SingleCatBooks>
      </Box>
    </Box>
  );
}
