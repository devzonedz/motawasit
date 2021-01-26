import React from 'react';
import { Helmet } from 'react-helmet';

import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Skeleton,
  Flex,
  Heading,
  Spinner,
} from '@chakra-ui/core';
import { Link, useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { connect } from 'react-redux';

import { getBooksBySerie } from '../redux/actions/booksActions';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CatBooks({ getBooksBySerie }) {
  let query = useQuery();
  let serie = query.get('serie');
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getBooksBySerie(serie);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [serie]);

  return (
    <Box>
      <Helmet>
        <title>{serie}</title>
      </Helmet>
      <BooksFilter></BooksFilter>
      <Box ml="80px" mr={['0', '80px']} mt="160px" mb="100px">
        <Box m="8">
          <Heading fontFamily="diodrum-bold !important">{serie}</Heading>
        </Box>
        {!data && (
          <Box textAlign="center">
            <Spinner size="xl" />
          </Box>
        )}

        <SimpleGrid columns={[1, 2, 3, 5]}>
          {data &&
            data.books &&
            data.books.length !== 0 &&
            data.books.map(book => (
              <Link key={book.id} to={`/book/${book.id}`}>
                <Box mb="4" cursor="pointer">
                  <Flex justifyContent="center">
                    <Box>
                      <LazyLoad once height="350px">
                        <Skeleton w="100%" isLoaded={loaded}>
                          <Image
                            onLoad={imageLoaded}
                            w="100%"
                            m="0 auto"
                            shadow="lg"
                            src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                          ></Image>
                        </Skeleton>
                      </LazyLoad>
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
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooksBySerie: serie => dispatch(getBooksBySerie(serie)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
