import React from 'react';
import Masonry from 'react-masonry-css';

import {
  Heading,
  Box,
  Divider,
  useColorMode,
  Image,
  SimpleGrid,
  Text,
  Skeleton,
} from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getHome } from '../redux/actions/homeActions';

import CatBooks from '../components/books/catBooks';

function Home({ getHome }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getHome();
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1100: 2,
    1000: 1,
  };
  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    700: 2,
  };

  const color = { light: 'black', dark: 'white' };
  return (
    <Box pr="10%" pl="10%" mt="100px" mb="100px">
      <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/black_lives_matter_in_charlotte1800x675-1600x600.jpg"></Image>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.articles &&
          data.articles.map(article => (
            <Link to={`/singlePost?id=${article.id}`}>
              <Box
                bg="white"
                w="100%"
                shadow="lg"
                // p="2"
                pb="4"
                // m="4"
                mt="8"
                cursor="pointer"
              >
                <Skeleton w="100%" isLoaded={loaded}>
                  <Image
                    w="100%"
                    onLoad={imageLoaded}
                    src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                  ></Image>
                </Skeleton>
                <Heading m="4"> {article.title} </Heading>
                <Box
                  m="4"
                  fontSize="xl"
                  className="content event-body"
                  dangerouslySetInnerHTML={{ __html: article.body }}
                ></Box>
              </Box>
            </Link>
          ))}
      </Masonry>

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.books &&
          data.books.map(book => (
            <Link to={`/book/${book.id}`}>
              <Box mt="8" pb="4" shadow="lg" bg="white">
                <Image
                  mt="2"
                  w="100%"
                  src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                ></Image>
                <Heading m="4"> {book.title} </Heading>
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
  return { getHome: () => dispatch(getHome()) };
};

export default connect(null, mapDispatchToProps)(Home);
