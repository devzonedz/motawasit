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
          <Link to={`/books_by_category/دراسات المتوسط`}>
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
            <Link to={`/books_by_category/دراسات المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/دراسات المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="دراسات المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/روايات المتوسط`}>
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
            <Link to={`/books_by_category/روايات المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/روايات المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="روايات المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/شعر المتوسط`}>
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
            <Link to={`/books_by_category/شعر المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/شعر المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="شعر المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/قصص المتوسط`}>
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
            <Link to={`/books_by_category/قصص المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/قصص المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="قصص المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/فلسفة المتوسط`}>
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
            <Link to={`/books_by_category/فلسفة المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/فلسفة المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="فلسفة المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/كتب السيرة`}>
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
            <Link to={`/books_by_category/كتب السيرة?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/كتب السيرة?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="كتب السيرة"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/يوميات المتوسط`}>
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
            <Link to={`/books_by_category/يوميات المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/يوميات المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="يوميات المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/معاجم وقواميس المتوسط`}>
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
            <Link to={`/books_by_category/معاجم وقواميس المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/معاجم وقواميس المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="معاجم وقواميس المتوسط"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books_by_category/منوعات المتوسط`}>
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
            <Link to={`/books_by_category/منوعات المتوسط?translate=0`}>
              <Heading fontWeight="normal" size="md" m="2">
                عربي
              </Heading>
            </Link>
            <Link to={`/books_by_category/منوعات المتوسط?translate=1`}>
              <Heading fontWeight="normal" size="md" m="2">
                مترجم
              </Heading>
            </Link>
          </Box>
        </Box>
        <CatBooks category="منوعات المتوسط"></CatBooks>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
