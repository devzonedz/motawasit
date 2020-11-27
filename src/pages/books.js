import React from 'react';
import { Heading, Box, Divider, useColorMode } from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';

import CatBooks from '../components/books/catBooks';
import BooksFilter from '../components/books/BooksFilter';

function Home(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };
  return (
    <Box mt="160px" mb="100px">
      <BooksFilter></BooksFilter>
      <Box m="8">
        <Box mr="80px">
          <Link to={`/books_by_category/الدراسات`}>
            <Heading cursor="pointer" m="2">
              الدراسات
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="4px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الدراسات"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/الرواية`}>
            <Heading cursor="pointer" m="2">
              الرواية
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الرواية"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/الشعر`}>
            <Heading cursor="pointer" m="2">
              الشعر
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الشعر"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/القصة القصيرة`}>
            <Heading cursor="pointer" m="2">
              القصة القصيرة
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="القصة القصيرة"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/الفلسفة`}>
            <Heading cursor="pointer" m="2">
              الفلسفة
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الفلسفة"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/سير ذاتية`}>
            <Heading cursor="pointer" m="2">
              سير ذاتية
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="سير ذاتية"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/يوميات عربية`}>
            <Heading cursor="pointer" m="2">
              يوميات عربية
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="يوميات عربية"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/المعاجم والقواميس`}>
            <Heading cursor="pointer" m="2">
              المعاجم والقواميس
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category=" المعاجم والقواميس"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/منوعات`}>
            <Heading cursor="pointer" m="2">
              منوعات
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading fontWeight="normal" size="md" m="2">
              عربي
            </Heading>
            <Heading fontWeight="normal" size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="منوعات"></CatBooks>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
