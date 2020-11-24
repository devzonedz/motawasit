import React from 'react';
import { SimpleGrid, Box, Image, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ category, getBooks }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(category);
      console.log(category);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 3, 5]}>
      {data &&
        data.map(book => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src={`${process.env.REACT_APP_STORAGE}/${book.image}`}
                src={`http://elmutawassit.devzone-dz.com/storage/${book.image}`}
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  {book.title}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {book.description}
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
  return { getBooks: category => dispatch(getBooks(category)) };
};

export default connect(null, mapDispatchToProps)(CatBooks);
