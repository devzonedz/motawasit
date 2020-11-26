import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  SimpleGrid,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getAuthor } from '../../redux/actions/authorActions';

function Author({ getAuthor }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };

  let { id } = useParams();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getAuthor(id);
      console.log(res);
      setData(res.data);
    }
    getData();
  }, []);
  return (
    <Box mt="100px" mb="100px" pr="10%" pl="10%">
      {data && (
        <>
          <Grid
            mb="50px"
            // pr={['2%', '2%', '10%', '10%']}
            // pl={['2%', '2%', '10%', '10%']}
            templateColumns={['1fr', '1fr', '1fr 2fr', '1fr 2fr']}
            gap="10px"
          >
            <Image
              //   borderRadius="50%"
              w="300px"
              h="300px"
              //   shadow="lg"
              src={`${process.env.REACT_APP_STORAGE}/${data.image}`}
            ></Image>
            <Box>
              <Heading m="4">{data.name}</Heading>
              <Divider
                // border="4px solid black"
                opacity="1"
                borderColor={color[colorMode]}
              ></Divider>
              <Text fontSize="2xl" m="4">
                {data.author_bio}
              </Text>
              <Heading m="4">صدر له في المتوسط</Heading>
              <Divider
                // border="4px solid black"
                opacity="1"
                borderColor={color[colorMode]}
              ></Divider>
              <SimpleGrid mt="4" columns={[1, 2, 3, 3]}>
                {data.books.map(book => (
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
                      </Box>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Box>
          </Grid>
        </>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getAuthor: id => dispatch(getAuthor(id)) };
};

export default connect(null, mapDispatchToProps)(Author);
