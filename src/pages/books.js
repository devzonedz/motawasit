import React from 'react';
import { Helmet } from 'react-helmet';

import { Heading, Box, Divider, useColorMode } from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';

import CatBooks from '../components/books/catBooks';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  let query = useQuery();
  let translate = query.get('translate');

  const color = { light: 'black', dark: 'white' };
  return (
    <Box mt="160px" mb="100px">
      <Helmet>
        <title>الكتب</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box mr={['0', '80px']} mt="160px" mb="100px">
        <CatBooks translate={translate}></CatBooks>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
