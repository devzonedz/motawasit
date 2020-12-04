import React from 'react';
import { SimpleGrid, Box, Image, Text, Skeleton, Flex } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ category, translate, getBooks }) {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(category, translate);
      console.log(category);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [category]);

  return (
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
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, translate) => dispatch(getBooks(category, translate)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
