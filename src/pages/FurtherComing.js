import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/core';
import Further from '../components/books/Further';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let furthercoming = query.get('furthercoming');
  let translate = query.get('translate');

  return (
    <Box>
      <Helmet>
        <title>قريبا من المتوسط</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box ml="80px" mr={['0', '80px']} mt="100px" mb="100px">
        <Further furthercoming={furthercoming} translate={translate}></Further>
      </Box>
    </Box>
  );
}
