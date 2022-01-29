import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import Featured from '../components/books/Featured';
import BooksFilter from '../components/books/BooksFilter';
import { Helmet } from 'react-helmet';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let featured = query.get('featured');
  let translate = query.get('translate');

  let { category } = useParams();

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>آخر إصدرات المتوسط</title>
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
