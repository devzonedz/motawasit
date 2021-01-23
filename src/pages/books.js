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
        <title>الكتب</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box ml="80px" mr={['0', '80px']} mt="160px" mb="100px">
        <CatBooks translate={translate}></CatBooks>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
