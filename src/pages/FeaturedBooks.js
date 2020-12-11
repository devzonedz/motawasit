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
  console.log(featured);

  let { category } = useParams();
  console.log(category);
  return (
    <Box>
      <Helmet>
        <title>اخر الاصدارات</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box mr={['0', '80px']} mt="100px" mb="100px">
        <Box m="8">
          <Heading>{category}</Heading>
        </Box>
        <Featured featured={featured} category={category}></Featured>
      </Box>
    </Box>
  );
}
