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
    <Box  mt="160px" mb="100px">
      <Helmet>
        <title>{category}</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box pr={["10%",'5%','5%',"3%"]} pl={["10%",'5%','5%',"3%"]}  mt={["0","170px","170px","170px"]} mb="100px">
        <Box m="4">
          <Heading fontFamily="diodrum-bold !important">{category}</Heading>
        </Box>
        <Box d="flex" m="2">
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
