import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation, Link } from 'react-router-dom';
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

  //   let { category } = useParams();
  return (
    <Box>
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box ml="80px" mr={['0', '80px']} mt="160px" mb="100px">
        <Box m="8">
          <Heading fontFamily="diodrum-bold !important">{category}</Heading>
        </Box>
        <Box d="flex" m="4">
          <Link to={`/books_by_category?category=${category}&translate=0`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              m="2"
            >
              عربي
            </Heading>
          </Link>
          <Link to={`/books_by_category?category=${category}&translate=1`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              m="2"
            >
              مترجم
            </Heading>
          </Link>
        </Box>
        <SingleCatBooks
          translate={translate}
          category={category}
        ></SingleCatBooks>
      </Box>
    </Box>
  );
}
