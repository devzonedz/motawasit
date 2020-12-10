import React from 'react';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Select,
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
      console.log(res);
      setData(res.data);
    }
    getData();
  }, []);

  const getFiltredAuthors = async letter => {
    const res = await getAuthors(letter);
    console.log(res);
    setData(res.data);
  };

  return (
    <Box className="padding" mt="100px" mb="100px">
      <Heading size="xl">كتابنا</Heading>
      <Flex
        mt="8"
        overflowX={{ base: 'auto', sm: 'auto' }}
        wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
        direction={['row', 'row', 'row', 'row']}
      >
        <Button
          onClick={() => getFiltredAuthors('أ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          أ
        </Button>
        <Button
          onClick={() => getFiltredAuthors('إ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          إ
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ب')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ب
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ت')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ت
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ث')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ث
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ج')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ج
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ح')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ح
        </Button>
        <Button
          onClick={() => getFiltredAuthors('خ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          خ
        </Button>
        <Button
          onClick={() => getFiltredAuthors('د')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          د
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ذ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ذ
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ر')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ر
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ز')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ز
        </Button>
        <Button
          onClick={() => getFiltredAuthors('س')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          س
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ش')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ش
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ص')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ص
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ض')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ض
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ط')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ط
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ظ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ظ
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ع')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ع
        </Button>
        <Button
          onClick={() => getFiltredAuthors('غ')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          غ
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ف')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ف
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ق')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ق
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ك')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ك
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ل')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ل
        </Button>
        <Button
          onClick={() => getFiltredAuthors('م')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          م
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ن')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ن
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ه')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ه
        </Button>
        <Button
          onClick={() => getFiltredAuthors('و')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          و
        </Button>
        <Button
          onClick={() => getFiltredAuthors('ي')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ي
        </Button>
      </Flex>{' '}
      <Flex mt="8" flexWrap="wrap">
        {data &&
          Object.values(data).map(author => (
            <Link key={author.id} to={`/author/${author.id}`}>
              <Box>
                <Skeleton w="100px" isLoaded={loaded}>
                  <Image
                    onLoad={imageLoaded}
                    w="100px"
                    //   h="150px"
                    m="2"
                    src={`${process.env.REACT_APP_STORAGE}/${author.image}`}
                  ></Image>
                </Skeleton>
                <Text
                  _hover={{
                    bg: 'yellow.300',
                    color: 'black',
                    textDecoration: 'underline',
                  }}
                  m="2"
                  fontSize="xl"
                >
                  {author.name}
                </Text>
              </Box>
            </Link>
          ))}
      </Flex>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getAuthors: letter => dispatch(getAuthors(letter)) };
};

export default connect(null, mapDispatchToProps)(Writers);
