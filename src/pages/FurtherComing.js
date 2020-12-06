import React from 'react';
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
  console.log(furthercoming);

  let { category } = useParams();
  console.log(category);
  return (
    <Box>
      <BooksFilter></BooksFilter>
      <Box mr="80px" mt="100px" mb="100px">
        <Box m="8">
          <Heading>{category}</Heading>
        </Box>
        <Further furthercoming={furthercoming} category={category}></Further>
      </Box>
    </Box>
  );
}
