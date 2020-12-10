import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import {
  Box,
  Image,
  Heading,
  Text,
  Divider,
  Grid,
  Flex,
  Skeleton,
} from '@chakra-ui/core';
import { useParams, useLocation, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getArticle } from '../redux/actions/articleActions';

import GlobalShare from '../util/GlobalShare';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SingleBlog({ getArticle }) {
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  let query = useQuery();
  let id = query.get('id');
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getArticle(id);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];
  return (
    <Box mt="100px">
      {data && (
        <Box>
          <Box
            pr={['2%', '2%', '7%', '7%']}
            pl={['2%', '2%', '7%', '7%']}
            mb="8"
            textAlign={['center', 'center', 'right']}
          >
            <Heading mb="2"> {data.article_title} </Heading>
            <Link key={data.author_id} to={`/author/${data.author_id}`}>
              <Text
                d="inline"
                _hover={{
                  bg: 'yellow.300',
                  color: 'black',
                  textDecoration: 'underline',
                }}
                m="2"
                fontSize="2xl"
                color="gray.500"
              >
                {data.author}
              </Text>
            </Link>
          </Box>
          <Flex justifyContent="center">
            <Box mb="8" w="85%">
              <Skeleton w="100%" isLoaded={loaded}>
                <Image
                  w="100%"
                  onLoad={imageLoaded}
                  src={`${process.env.REACT_APP_STORAGE}/${data.image}`}
                ></Image>
              </Skeleton>
            </Box>
          </Flex>

          <Grid
            pr={['2%', '2%', '7%', '7%']}
            pl={['2%', '2%', '7%', '7%']}
            templateColumns={['1fr', '1fr', '0.5fr 2fr', '0.5fr 2fr']}
            gap="10px"
          >
            <Box display={['none', 'none', 'block', 'block']}>
              {data.books.map(book => (
                <Box mb="8">
                  {/* <Text mb="2" fontSize="xl">
                بمساهمة صلاح برياني
              </Text> */}
                  <Divider w="80%"></Divider>
                  {/* <Image mt="2" src={``}></Image> */}
                  <Box
                    mt="2"
                    mb="4"
                    style={{
                      background: `
    url('${process.env.REACT_APP_STORAGE}/${book.cover}')`,
                    }}
                    className="detail-image"
                    w="80%"
                    h="270px"
                  ></Box>
                  <Heading size="md">{book.title}</Heading>
                  <Text> {book.sub_title} </Text>

                  <Box
                    fontSize="lg"
                    mt="2"
                    pl="6"
                    className="book-description"
                    dangerouslySetInnerHTML={{
                      __html: book.description,
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
            <Box
              fontSize="2xl"
              mb="8"
              pl={['2%', '2%', '15%', '15%']}
              pr={['2%', '2%', '0%', '0%']}
              className="dont-break-out"
              dangerouslySetInnerHTML={{
                __html: data.article_body,
              }}
            ></Box>
          </Grid>
          <GlobalShare></GlobalShare>
          {data.books[0] && (
            <Box pr="3%" pl="3%" bg="black" borderBottom="1px solid white">
              <Box mt="100px" mb="4" color="white">
                <Heading mr="7%" p="4" size="lg">
                  كتب ذات صلة
                </Heading>
              </Box>
              <Carousel
                breakPoints={breakPoints}
                isRTL={true}
                style={{
                  //   marginTop: 100,

                  paddingBottom: 10,
                }}
                // itemsToScroll={3}
                // itemsToShow={3}
              >
                {data.books.map(book => (
                  <Link key={book.id} to={`/book/${book.id}`}>
                    <Box w="350px" bg="#f5f2ef" mb="4" cursor="pointer">
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
          {data.maitres[0] && (
            <Box pr="5%" pl="3%" bg="black" borderBottom="1px solid white">
              <Box mb="4" color="white">
                <Heading mr="7%" p="4" size="lg">
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
                // itemsToScroll={3}
                // itemsToShow={3}
              >
                {data.maitres.map(article => (
                  //               <Link to={`/singlePost?id=${article.id}`}>
                  //                 <Box bg="#f5f2ef" shadow="lg" p="2" cursor="pointer">
                  //                   <Box
                  //                     style={{
                  //                       background: `
                  // url('${process.env.REACT_APP_STORAGE}/${article.image}')`,
                  //                     }}
                  //                     className="detail-image"
                  //                     h="200px"
                  //                     w="280px"
                  //                   ></Box>
                  //                   <Heading m="2" size="lg">
                  //                     {article.title}
                  //                   </Heading>
                  //                   <Heading> {article.author} </Heading>

                  //                   <Box
                  //                     fontSize="lg"
                  //                     className="event-body"
                  //                     dangerouslySetInnerHTML={{
                  //                       __html: article.body,
                  //                     }}
                  //                   ></Box>
                  //                 </Box>
                  //               </Link>
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
                          {/* <Box
                    style={{
                      background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${process.env.REACT_APP_STORAGE}/${article.image}')`,
                    }}
                    className="detail-image"
                    h="200px"
                  ></Box> */}
                          <Image
                            w="100%"
                            h="200px"
                            onLoad={imageLoaded}
                            src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                          ></Image>
                        </Skeleton>
                        <Heading m="2" size="lg">
                          {article.title}
                        </Heading>
                        <Heading> {article.author} </Heading>
                        <Box
                          m="2"
                          fontSize="lg"
                          className="event-body"
                          dangerouslySetInnerHTML={{
                            __html: article.body,
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Carousel>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getArticle: id => dispatch(getArticle(id)) };
};

export default connect(null, mapDispatchToProps)(SingleBlog);
