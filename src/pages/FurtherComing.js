import React from 'react';
import { Helmet } from 'react-helmet';

import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import Further from '../components/books/Further';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let furthercoming = query.get('furthercoming');
  let translate = query.get('translate');
  console.log(furthercoming);

  let { category } = useParams();
  console.log(category);
  return (
    <Box>
      <Helmet>
        <title>ياتي قريبا</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box mr={['0', '80px']} mt="100px" mb="100px">
        <Further furthercoming={furthercoming} translate={translate}></Further>
      </Box>
    </Box>
  );
}
