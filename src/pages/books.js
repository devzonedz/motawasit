import React from 'react';
import { Helmet } from 'react-helmet';

import { Box } from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';

import CatBooks from '../components/books/catBooks';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home(props) {
  let query = useQuery();
  let translate = query.get('translate');

  return (
    <Box mt="160px" mb="100px">
      <Helmet>
        <title>كتب المتوسط</title>
      </Helmet>
      <BooksFilter />
      <Box
        pr={['10%', '5%', '5%', '5%']}
        pl={['10%', '5%', '5%', '5%']}
        mt={['0', '160px', '160px', '160px']}
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
