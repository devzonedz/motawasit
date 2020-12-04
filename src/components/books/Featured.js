import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Divider,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ featured, getBooks }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(null, featured, null);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  return (
    <Box mt="160px" mb="100px">
      {data &&
        data.book_categories &&
        data.book_categories.length !== 0 &&
        data.book_categories.map(bookcat => (
          <Box>
            {bookcat.books.length !== 0 && (
              <>
                <Box m="8">
                  <Box>
                    <Link to={`/books_by_category/${bookcat.key}`}>
                      <Heading cursor="pointer" m="2">
                        {bookcat.name}
                      </Heading>
                    </Link>
                    <Divider
                      w="20%"
                      // border="4px solid black"
                      opacity="1"
                      // borderColor={color[colorMode]}
                    ></Divider>
                    <Box d="flex" m="4">
                      <Link
                        to={`/books_by_category/${bookcat.key}?translate=0`}
                      >
                        <Heading fontWeight="normal" size="md" m="2">
                          عربي
                        </Heading>
                      </Link>
                      <Link
                        to={`/books_by_category/${bookcat.key}?translate=1`}
                      >
                        <Heading fontWeight="normal" size="md" m="2">
                          مترجم
                        </Heading>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <SimpleGrid columns={[1, 2, 3, 5]}>
                  {bookcat.books.map(book => (
                    <Link key={book.id} to={`/book/${book.id}`}>
                      <Box mb="4" cursor="pointer">
                        <Image
                          w="225px"
                          h="350px"
                          m="0 auto"
                          shadow="lg"
                          src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                        ></Image>
                        <Box mt="4" textAlign="center">
                          <Text fontWeight="500" fontSize="xl">
                            {book.title}
                          </Text>
                          <Text fontSize="md" color="gray.600">
                            {book.sub_title}
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            {book.author}
                          </Text>
                          <Text fontWeight="bold">${book.price}</Text>
                        </Box>
                      </Box>
                    </Link>
                  ))}
                </SimpleGrid>
              </>
            )}
          </Box>
        ))}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, featured, translate) =>
      dispatch(getBooks(category, featured, translate)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
