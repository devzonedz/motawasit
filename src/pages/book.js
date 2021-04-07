import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  Flex,
  Skeleton,
  useColorMode,
  Spinner,
} from '@chakra-ui/core';
import Carousel from 'react-elastic-carousel';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { getBook } from '../redux/actions/booksActions';

import GlobalShare from '../util/GlobalShare';

function Book({ getBook }) {
  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const color = { light: 'black', dark: 'white' };

  let { id } = useParams();
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getBook(id);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [id]);

  console.log(data);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1900, itemsToShow: 4 },
  ];
  const bookBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];
  return (
    <Box mt="100px">
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Box mt="100px">
        <Grid
          pr={['2%', '2%', '7%', '7%']}
          pl={['2%', '2%', '7%', '7%']}
          templateColumns={['1fr', '1fr', '0.5fr 2fr', '0.5fr 2fr']}
          gap="10px"
        >
          {data && (
            <>
              <Helmet>
                <title>{data.title}</title>
              </Helmet>
              <Box>
                <Box top="0" position="sticky">
                  <Flex justifyContent="center">
                    <Box m="4">
                      <Skeleton
                        w={['300px', '300px', '400px', '400px']}
                        isLoaded={loaded}
                      >
                        <Image
                          loading="lazy"
                          onLoad={imageLoaded}
                          shadow="lg"
                          w={['300px', '300px', '400px', '400px']}
                          src={`${process.env.REACT_APP_STORAGE}/${data.cover}`}
                        ></Image>
                      </Skeleton>
                      <a
                        target="_blank"
                        href={`${process.env.REACT_APP_SHOP}/book/${data.id}`}
                      >
                        <Button
                          rounded="20px"
                          mt="4"
                          w={['300px', '300px', '400px', '400px']}
                          colorScheme="red"
                          fontFamily="diodrum-med !important"
                        >
                          لشراء الكتاب المس هنا
                        </Button>
                      </a>
                      <Box mt="4" w={['300px', '300px', '400px', '400px']}>
                        <GlobalShare></GlobalShare>
                      </Box>
                      <Box w={['300px', '300px', '400px', '400px']}>
                        {data.podcast && (
                          <Box
                            m="4"
                            fontSize="2xl"
                            className="content"
                            dangerouslySetInnerHTML={{ __html: data.podcast }}
                          ></Box>
                        )}
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box m="4" w={['370px', '400px', 'auto', 'auto']}>
                <Heading fontFamily="diodrum-med !important" m="4">
                  {data.title}
                </Heading>
                <Divider></Divider>
                <Text fontSize="xl">{data.sub_title}</Text>
                <Divider></Divider>
                <Flex>
                  {data.author.map(author => (
                    <Link key={author.id} to={`/author/${author.id}`}>
                      <Text
                        _hover={{
                          bg: 'black',
                          color: 'white',
                          textDecoration: 'underline',
                        }}
                        m="2"
                        fontSize="2xl"
                        color="gray.500"
                      >
                        {author.name}
                      </Text>
                    </Link>
                  ))}
                </Flex>
                <Divider></Divider>
                {data.translate_from && (
                  <Text m="2" fontSize="2xl">
                    تُرجم عن:{data.translate_from}
                  </Text>
                )}

                <Box
                  m="4"
                  fontSize="2xl"
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.overview }}
                ></Box>
                <Divider></Divider>
                <Tabs>
                  <TabList className="booktablist">
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      عن الكتاب
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      عن المؤلف
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      فهرس الكتاب
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      من الكتاب
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      في الصحافة
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      معلومات الكتاب
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      {/* <Text fontSize="xl" mt="4">
                        {data.description}
                      </Text> */}
                      <Box
                        fontSize="2xl"
                        className="content"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      ></Box>
                    </TabPanel>
                    <TabPanel>
                      {data.author.map(author => (
                        <Box>
                          <Heading size="lg">{author.name}</Heading>
                          <Text m="2" fontSize="2xl">
                            {author.author_bio}
                          </Text>
                        </Box>
                      ))}
                    </TabPanel>
                    <TabPanel fontSize="xl">
                      <Box
                        fontSize="xl"
                        className="content"
                        dangerouslySetInnerHTML={{ __html: data.index }}
                      ></Box>
                    </TabPanel>
                    <TabPanel fontSize="xl">
                      <Box
                        fontSize="xl"
                        className="content"
                        dangerouslySetInnerHTML={{ __html: data.from_book }}
                      ></Box>
                    </TabPanel>

                    <TabPanel>
                      <Box
                        fontSize="xl"
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: data.press_external_link,
                        }}
                      ></Box>
                    </TabPanel>
                    <TabPanel fontSize="xl">
                      <List mt="4">
                        <ListItem>الناشر : {data.publisher} </ListItem>
                        <ListItem>
                          تاريخ النشر :{' '}
                          {moment(data.publish_date).format('DD/MM/yyyy')}{' '}
                        </ListItem>
                        <ListItem>عدد الصفحات : {data.page_number} </ListItem>
                        <ListItem dir="ltr"> {data.isbn} : ISBN </ListItem>
                        <ListItem>السعر : {data.price}$</ListItem>
                        <ListItem>
                          هاشتاغ :{' '}
                          <Box
                            d="inline"
                            className="content"
                            dangerouslySetInnerHTML={{ __html: data.hashtag }}
                          ></Box>
                        </ListItem>
                      </List>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </>
          )}
        </Grid>
        {data && data.books[0] && (
          <Box
            pr="7%"
            pl="3%"
            // bg={bg[colorMode]}
            bg="black"
            borderBottom="1px solid white"
          >
            <Box
              mt="100px"
              mb="4"
              // color={color[colorMode]}
              color="white"
            >
              <Heading
                fontFamily="diodrum-med !important"
                mr="7%"
                p="4"
                size="lg"
              >
                كتب ذات صلة
              </Heading>
            </Box>
            <Carousel
              breakPoints={bookBreakPoints}
              isRTL={true}
              style={{
                //   marginTop: 100,

                paddingBottom: 10,
              }}
              //   itemsToScroll={3}
              //   itemsToShow={3}
            >
              {data.books.map(book => (
                <Link key={book.id} to={`/book/${book.id}`}>
                  <Box w="350px" mb="4" cursor="pointer">
                    <Image
                      loading="lazy"
                      w="225px"
                      h="350px"
                      m="0 auto"
                      shadow="lg"
                      src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                    ></Image>
                    <Box
                      fontFamily="diodrum-med !important"
                      color="white"
                      mt="4"
                      textAlign="center"
                    >
                      <Text fontWeight="500" fontSize="xl">
                        {book.title}
                      </Text>
                      <Text fontSize="md">{book.sub_title}</Text>
                      <Text fontSize="sm">{book.author}</Text>
                      <Text fontWeight="bold">${book.price}</Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Carousel>
          </Box>
        )}
        {data && data.articles[0] && (
          <Box
            pr="5%"
            pl="3%"
            bg={bg[colorMode]}
            color="black"
            borderBottom="1px solid white"
          >
            <Box mb="4" color={color[colorMode]}>
              <Heading
                fontFamily="diodrum-med !important"
                mr="7%"
                p="4"
                size="lg"
              >
                مقالات ذات صلة
              </Heading>
            </Box>
            <Carousel
              breakPoints={breakPoints}
              isRTL={true}
              style={{
                //   marginTop: 100,

                paddingBottom: 10,
              }}
              //   itemsToScroll={3}
              //   itemsToShow={3}
            >
              {data.articles.map(article => (
                <Link to={`/singlePost?id=${article.id}`}>
                  <Box
                    bg="white"
                    w="350px"
                    shadow="lg"
                    // p="2"
                    pb="4"
                    m="4"
                    cursor="pointer"
                  >
                    <Box>
                      <Skeleton w="100%" isLoaded={loaded}>
                        <Image
                          loading="lazy"
                          w="100%"
                          //   h="200px"
                          onLoad={imageLoaded}
                          src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                        ></Image>
                      </Skeleton>
                      <Text
                        m="2"
                        mt="4"
                        fontSize="lg"
                        fontFamily="diodrum-med !important"
                      >
                        {' '}
                        {article.author}{' '}
                      </Text>
                      <Heading
                        fontFamily="diodrum-med !important"
                        m="2"
                        size="lg"
                      >
                        {article.title}
                      </Heading>
                      <Box m="4" fontSize="xl" className="content event-body">
                        <Box
                          dangerouslySetInnerHTML={{ __html: article.body }}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Carousel>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getBook: id => dispatch(getBook(id)) };
};

export default connect(null, mapDispatchToProps)(Book);
