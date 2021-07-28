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
    <Box mt="160px" mb="100px">
      <Helmet>
        <title>قريبا من المتوسط</title>
      </Helmet>
      <BooksFilter></BooksFilter>
        <Box  pr={["10%",'5%','5%',"3%"]} pl={["10%",'5%','5%',"3%"]} mt={["0","160px","160px","160px"]} mb="100px">
        <Further furthercoming={furthercoming} translate={translate}></Further>
      </Box>
    </Box>
  );
}
