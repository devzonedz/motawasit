import React from 'react';
import {
  Heading,
  Box,
  Divider,
  useColorMode,
  Image,
  SimpleGrid,
  Text,
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

  const color = { light: 'black', dark: 'white' };
  return (
    <Box pr="10%" pl="10%" mt="100px" mb="100px">
      <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/black_lives_matter_in_charlotte1800x675-1600x600.jpg"></Image>
      <SimpleGrid mt="8" spacing={4} columns={[1, 2, 2, 3]}>
        {data &&
          data.articles &&
          data.articles.map(article => (
            <Link to={`/singlePost?id=${article.id}`}>
              <Box>
                <Heading> {article.title} </Heading>
                <Box
                  fontSize="xl"
                  className="content event-body"
                  dangerouslySetInnerHTML={{ __html: article.body }}
                ></Box>
                <Image
                  src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                ></Image>
              </Box>
            </Link>
          ))}
      </SimpleGrid>
      <SimpleGrid mt="8" spacing={4} columns={[1, 2, 2, 3]}>
        {data &&
          data.books &&
          data.books.map(book => (
            <Link to={`/book/${book.id}`}>
              <Box>
                <Heading> {book.title} </Heading>
                <Text fontSize="xl"> {book.overview} </Text>
                <Image
                  mt="2"
                  w="300px"
                  src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                ></Image>
              </Box>
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getHome: () => dispatch(getHome()) };
};

export default connect(null, mapDispatchToProps)(Home);
