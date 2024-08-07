import React from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Skeleton,
  Spinner,
  useColorMode,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthors } from '../../redux/actions/authorActions';

function Writers({ getAuthors }) {
  const { colorMode } = useColorMode();
  const bg = { light: 'white', dark: '#151a23' };
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  const imageLoaded = () => {
    console.log('Image loaded'); // Debugging line
    setLoaded(true);
  };

  React.useEffect(() => {
    async function getData() {
      const res = await getAuthors();
      setData(res.data);
    }
    getData();
  }, [getAuthors]);

  const getFiltredAuthors = async letter => {
    const res = await getAuthors(letter);
    setData(res.data);
  };

  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1100: 2,
    1000: 1,
  };

  return (
    <Box className="padding" mt={{ base: '2em', md: '6em' }} mb="100px">
      <Helmet>
        <title>كتاب المتوسط</title>
      </Helmet>
      <Heading fontFamily="diodrum-bold !important" size="xl">
        كتاب المتوسط
      </Heading>
      <Flex
        mt="8"
        overflowX={{ base: 'auto', sm: 'auto' }}
        wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
        direction={['row', 'row', 'row', 'row']}
      >
        {/* Alphabet buttons */}
        {['أ', 'إ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'].map(letter => (
          <Button
            key={letter}
            _focus={{ bg: 'black', color: 'white' }}
            onClick={() => getFiltredAuthors(letter)}
            fontWeight="normal"
            fontSize="2xl"
            m="2"
          >
            {letter}
          </Button>
        ))}
      </Flex>
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          Object.values(data).map(author => (
            <Link key={author.id} to={`/author/${author.id}`}>
              <Box overflow="hidden" pb="4" mt="4" mb="4" bg={bg[colorMode]}>
                <Skeleton w="100%" isLoaded={loaded}>
                  <Image
                    loading="lazy"
                    onLoad={imageLoaded}
                    w="100%"
                    src={author.image}
                    fallbackSrc="https://via.placeholder.com/150" // Placeholder image for debugging
                    alt={author.name}
                  />
                </Skeleton>
                <Text
                  _hover={{
                    bg: 'black',
                    color: 'white',
                    textDecoration: 'underline',
                  }}
                  mt="4"
                  mr="4"
                  fontSize="xl"
                  fontFamily="diodrum-med !important"
                >
                  {author.name}
                </Text>
              </Box>
            </Link>
          ))}
      </Masonry>
    </Box>
  );
}

const mapDispatchToProps = dispatch => ({
  getAuthors: letter => dispatch(getAuthors(letter)),
});

export default connect(null, mapDispatchToProps)(Writers);
