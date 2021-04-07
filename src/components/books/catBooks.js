import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Skeleton,
  useColorMode,
  Spinner,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/booksActions';
import Masonry from 'react-masonry-css';
import LazyLoad from 'react-lazyload';

function CatBooks({ translate, getBooks, name }) {
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };

  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(null, null, translate, null);
      if (res) {
        setData(res.data);
      }
      console.log(res);
    }
    getData();
  }, [translate]);

  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    700: 2,
  };

  return (
    <Box>
      <Box d="flex" m="4">
        <Link to={`/books?translate=0`}>
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            m="2"
          >
            عربي
          </Heading>
        </Link>
        <Link to={`/books?translate=1`}>
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

      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.books &&
          data.books.length !== 0 &&
          data.books.map(book => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <Box mt="8" pb="4" shadow="lg" bg={bg[colorMode]}>
                <LazyLoad once height="350px">
                  <Skeleton w="100%" isLoaded={loaded}>
                    <Image
                      loading="lazy"
                      onLoad={imageLoaded}
                      w="100%"
                      m="0 auto"
                      shadow="lg"
                      src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                    ></Image>
                  </Skeleton>
                </LazyLoad>
                <Heading m="4"> {book.title} </Heading>
                <Text fontSize="2xl" m="2">
                  {' '}
                  {book?.author[0]?.name}{' '}
                </Text>

                <Box
                  m="4"
                  fontSize="xl"
                  className="content"
                  dangerouslySetInnerHTML={{ __html: book.overview }}
                ></Box>
              </Box>
            </Link>
          ))}
      </Masonry>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, featured, furthercoming, translate) =>
      dispatch(getBooks(category, featured, furthercoming, translate)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
