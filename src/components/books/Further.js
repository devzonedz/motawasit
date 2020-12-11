import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Divider,
  Skeleton,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ furthercoming, getBooks }) {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    let response;
    async function getData() {
      const res = await getBooks(null, null, null, furthercoming);
      if (res) {
        console.log(response);
        setData(Object.values(res.data));
      }
    }
    getData();
  }, []);

  return (
    <Box mt="160px" mb="100px">
      <Box>
        <SimpleGrid columns={[1, 2, 3, 5]}>
          {data &&
            data.length !== 0 &&
            data.map(book => (
              <Link key={book.id} to={`/book/${book.id}`}>
                <Box mb="4" cursor="pointer">
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
