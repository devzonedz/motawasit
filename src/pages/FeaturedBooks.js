import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import Featured from '../components/books/Featured';
import BooksFilter from '../components/books/BooksFilter';
import { Helmet } from 'react-helmet';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let featured = query.get('featured');
  let translate = query.get('translate');

  let { category } = useParams();
  return (
    <Box>
      <Helmet>
        <title>آخر إصدرات المتوسط</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box mt="160px" mb="100px" pr={["10%",'5%','5%',"3%"]} pl={["10%",'5%','5%',"3%"]}>
        <Box m="8">
          <Heading>{category}</Heading>
        </Box>
        <Featured
          translate={translate}
          featured={featured}
          category={category}
        ></Featured>
      </Box>
    </Box>
  );
}
