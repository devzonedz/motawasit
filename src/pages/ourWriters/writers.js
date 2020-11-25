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
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthors } from '../../redux/actions/authorActions';

function Writers({ getAuthors }) {
  const [data, setData] = React.useState(null);
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
    <Box pl="10%" pr="10%" mt="100px" mb="100px" textAlign="center">
      <Heading size="xl">كتابنا</Heading>
      <Flex flexWrap="wrap">
        <Button
          onClick={() => getFiltredAuthors('ا')}
          fontWeight="normal"
          fontSize="2xl"
          m="2"
        >
          ا
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
      <Flex flexWrap="wrap">
        {data &&
          data.map(author => (
            <Link>
              <Text m="2" fontSize="2xl">
                {author.name}
              </Text>
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
