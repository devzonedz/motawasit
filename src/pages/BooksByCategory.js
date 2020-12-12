import React from 'react';
import { Helmet } from 'react-helmet';

import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import SingleCatBooks from '../components/books/SingleCatBooks';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let category = query.get('category');
  let translate = query.get('translate');
  console.log(translate);

  //   let { category } = useParams();
  //   console.log(category);
  return (
    <Box>
      <Helmet>
        <title>{category}</title>
      </Helmet>
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
