import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocation, Link } from 'react-router-dom';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import SingleCatBooks from '../components/books/SingleCatBooks';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let category = query.get('category');
  let translate = query.get('translate');

  const activeLink = {
    background: '#000',
    color: 'white',
  };

  //   let { category } = useParams();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>{category}</title>
      </Helmet>
      {isSmallScreen && (
        <Headroom
          className="book-filter"
          style={{
            top: '70px',
            left: '0px',
            right: '0px',
            zIndex: '1',
            transform: 'translate3D(0px, 0px, 0px)',
            transition: 'all .5s ease-in-out 0s',
          }}
        >
          <BooksFilter />
        </Headroom>
      )}
      {!isSmallScreen && <BooksFilter />}
      <Box
        pr={['10%', '5%', '5%', '3%']}
        pl={['10%', '5%', '5%', '3%']}
        mb="100px"
      >
        <Box m="4">
          <Heading fontFamily="diodrum-bold !important">{category}</Heading>
        </Box>
        <Box d="flex" m="2">
          <Link to={`/books_by_category?category=${category}&translate=0`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              my="2"
              pt="1"
              pb="4"
              px="5"
              style={translate === '0' ? activeLink : {}}
            >
              عربي
            </Heading>
          </Link>
          <Link to={`/books_by_category?category=${category}&translate=1`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              my="2"
              pt="1"
              pb="4"
              px="5"
              style={translate === '1' ? activeLink : {}}
            >
              مترجم
            </Heading>
          </Link>
        </Box>
        <SingleCatBooks translate={translate} category={category} />
      </Box>
    </Box>
  );
}
