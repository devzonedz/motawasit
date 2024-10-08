import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useBreakpointValue } from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';
import CatBooks from '../components/books/catBooks';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home({ getBooks }) {
  let query = useQuery();
  let translate = query.get('translate');

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    getBooks(null, null, translate, null);
  }, [translate, getBooks]);

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>كتب المتوسط</title>
      </Helmet>
      <Box
        position={isSmallScreen ? 'static' : 'fixed'}
        top="70px"  // You can adjust this value to control where the filter starts
        zIndex="10"
        width="full"
      >
        <BooksFilter />
      </Box>

      <Box
        pr={['10%', '5%', '5%', '5%']}
        pl={['10%', '5%', '5%', '5%']}
        mb="100px"
        mt="150px"
      >
        <CatBooks translate={translate} />
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { getBooks: (category, featured, translate, furthercoming) => dispatch(getBooks(category, featured, translate, furthercoming)) };
};

export default connect(null, mapDispatchToProps)(Home);
