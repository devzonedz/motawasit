import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Divider,
  Flex,
  Skeleton,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ translate, featured, getBooks }) {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(null, featured, translate, null);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [translate]);

  return (
    <Box>
      <Box d="flex" m="4">
        <Link to={`/featured?featured=1&translate=0`}>
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            m="2"
          >
            عربي
          </Heading>
        </Link>
        <Link to={`/featured?featured=1&translate=1`}>
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            m="2"
          >
            مترجم
          </Heading>
        </Link>
      </Box>
      <SimpleGrid columns={[1, 2, 3, 5]}>
        {data &&
          data.books &&
          data.books.length !== 0 &&
          data.books.map(book => (
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
                  <Text
                    fontFamily="diodrum-med !important"
                    fontWeight="500"
                    fontSize="xl"
                  >
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
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, featured, translate, furthercoming) =>
      dispatch(getBooks(category, featured, translate, furthercoming)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
