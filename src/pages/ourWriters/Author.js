import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  SimpleGrid,
  Divider,
  useColorMode,
  Skeleton,
  Spinner,
} from '@chakra-ui/core';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAuthor } from '../../redux/actions/authorActions';

function Author({ getAuthor }) {
  const { colorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };

  let { id } = useParams();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getAuthor(id);
      setData(res.data);
    }
    getData();
  }, [id]);
  return (
    <Box mt={{ base: '2em', md: '6em' }} mb="100px" className="padding">
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      {data && data === 'لا توجد صفحة لهذا الكاتب' && (
        <Box textAlign="center" mt="200px" mb="200px">
          <Heading>{data}</Heading>
        </Box>
      )}
      {data && data !== 'لا توجد صفحة لهذا الكاتب' && (
        <>
          <Helmet>
            <title>{data.name} على المتوسط</title>
          </Helmet>
          <Grid
            mb="50px"
            // pr={['2%', '2%', '10%', '10%']}
            // pl={['2%', '2%', '10%', '10%']}
            templateColumns={['1fr', '1fr', '1fr 2fr', '1fr 2fr']}
            gap="10px"
          >
            <Skeleton isLoaded={loaded}>
              <Image
                loading="lazy"
                onLoad={imageLoaded}
                //   borderRadius="50%"
                //   w="300px"
                //   h="300px"
                //   shadow="lg"
                src={`${process.env.REACT_APP_STORAGE}/${data.image}`}
              ></Image>
            </Skeleton>
            <Box>
              <Heading fontFamily="diodrum-med !important" size="lg" m="4">
                {data.name}
              </Heading>
              <Divider
                // border="4px solid black"
                opacity="1"
                borderColor={color[colorMode]}
              ></Divider>
                <Box
                 fontSize="2xl"
                    dangerouslySetInnerHTML={{ __html: data.author_bio }}
                ></Box>
              <Heading fontFamily="diodrum-med !important" size="lg" m="4">
                صدر له/لها في المتوسط
              </Heading>
              <Divider
                // border="4px solid black"
                opacity="1"
                borderColor={color[colorMode]}
              ></Divider>
              <SimpleGrid mt="4" spacing={8} columns={[1, 2, 3, 3]}>
                {data.books.map(book => (
                  <Link key={book.id} to={`/book/${book.id}`}>
                    <Box mb="4" cursor="pointer">
                      <Image
                        loading="lazy"
                        // w="225px"
                        // h="280px"
                        m="0 auto"
                        shadow="lg"
                        src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                      ></Image>
                      {/* <Box mt="4" textAlign="center">
                        <Text fontWeight="500" fontSize="xl">
                          {book.title}
                        </Text>
                        <Text fontSize="md" color="gray.600">
                          {book.sub_title}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {book.author}
                        </Text>
                      </Box> */}
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
