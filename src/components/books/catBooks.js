import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Divider,
  Skeleton,
  Flex,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ featured, category, getBooks, name }) {
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(category, featured);
      console.log(category);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [featured]);
  console.log(data && data.books);

  return (
    <Box>
      {data && data.books.length !== 0 && (
        <>
          <Box mr="80px">
            <Link to={`/books_by_category/${category}`}>
              <Heading cursor="pointer" m="2">
                {name}
              </Heading>
            </Link>
            <Divider
              w="20%"
              // border="4px solid black"
              opacity="1"
              //   borderColor={color[colorMode]}
            ></Divider>
            <Box d="flex" m="4">
              <Link to={`/books_by_category/${category}?translate=0`}>
                <Heading fontWeight="normal" size="md" m="2">
                  عربي
                </Heading>
              </Link>
              <Link to={`/books_by_category/${category}?translate=1`}>
                <Heading fontWeight="normal" size="md" m="2">
                  مترجم
                </Heading>
              </Link>
            </Box>
          </Box>
          <SimpleGrid mr="80px" columns={[1, 2, 3, 5]}>
            {data &&
              data.books &&
              data.books.length !== 0 &&
              data.books.map(book => (
                <>
                  <Link key={book.id} to={`/book/${book.id}`}>
                    <Box mb="4" cursor="pointer">
                      <Flex justifyContent="center">
                        <Box>
                          <Skeleton w="225px" h="350px" isLoaded={loaded}>
                            <Image
                              onLoad={imageLoaded}
                              w="225px"
                              h="350px"
                              m="0 auto"
                              shadow="lg"
                              src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                            ></Image>
                          </Skeleton>
                        </Box>
                      </Flex>
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
                </>
              ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, featured) => dispatch(getBooks(category, featured)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
