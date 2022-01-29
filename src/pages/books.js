import React from 'react';
import { Helmet } from 'react-helmet';

import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';

import CatBooks from '../components/books/catBooks';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home(props) {
  let query = useQuery();
  let translate = query.get('translate');

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <Helmet>
        <title>كتب المتوسط</title>
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
        pr={['10%', '5%', '5%', '5%']}
        pl={['10%', '5%', '5%', '5%']}
        mb="100px"
      >
        <CatBooks translate={translate} />
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
