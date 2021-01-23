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
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthors } from '../../redux/actions/authorActions';

function Writers({ getAuthors }) {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getAuthors();
      setData(res.data);
    }
    getData();
  }, []);

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
    <Box className="padding" mt="100px" mb="100px">
      <Helmet>
        <title> كتابنا</title>
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
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('أ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          أ
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('إ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          إ
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ب')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ب
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ت')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ت
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ث')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ث
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ج')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ج
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ح')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ح
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('خ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          خ
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('د')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          د
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ذ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ذ
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ر')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ر
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ز')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ز
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('س')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          س
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ش')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ش
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ص')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ص
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ض')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ض
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ط')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ط
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ظ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ظ
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ع')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ع
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('غ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          غ
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ف')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ف
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ق')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ق
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ك')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ك
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ل')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ل
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('م')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          م
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ن')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ن
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ه')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ه
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('و')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          و
        </Button>
        <Button
          _focus={{ bg: 'black', color: 'white' }}
          onClick={() => getFiltredAuthors('ي')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ي
        </Button>
      </Flex>{' '}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          Object.values(data).map(author => (
            <Link key={author.id} to={`/author/${author.id}`}>
              <Box oveflow="hidden" mt="4" mb="4" bg="white">
                <Skeleton w="100%" isLoaded={loaded}>
                  <Image
                    onLoad={imageLoaded}
                    w="100%"
                    //   h="150px"
                    // m="2"
                    src={`${process.env.REACT_APP_STORAGE}/${author.image}`}
                  ></Image>
                </Skeleton>
                <Text
                  _hover={{
                    bg: 'black',
                    color: 'white',
                    textDecoration: 'underline',
                  }}
                  //   m="2"
                  fontSize="xl"
                  fontFamily="diodrum-med !important"
                >
                  {author.name}
                </Text>
              </Box>
            </Link>
          ))}
      </Masonry>
      {/* <Flex mt="8" flexWrap="wrap"></Flex> */}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getAuthors: letter => dispatch(getAuthors(letter)) };
};

export default connect(null, mapDispatchToProps)(Writers);
