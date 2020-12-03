import React from 'react';
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
  let featured = query.get('featured');
  console.log(featured);

  const color = { light: 'black', dark: 'white' };
  return (
    <Box mt="160px" mb="100px">
      <BooksFilter></BooksFilter>
      <Box m="8">
        <CatBooks
          name="الدراسات"
          featured={featured}
          category="دراسات المتوسط"
        ></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name="الرواية" category="روايات المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name="الشعر" category="شعر المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name="القصة القصيرة" category="قصص المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name="الفلسفة" category="فلسفة المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name=" سير ذاتية" category="كتب السيرة"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name="يوميات عربية" category="يوميات المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks
          name=" المعاجم والقواميس"
          category="معاجم وقواميس المتوسط"
        ></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <CatBooks name="منوعات" category="منوعات المتوسط"></CatBooks>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
