import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Helmet } from 'react-helmet';
import {
  Box,
  Image,
  Heading,
  Text,
  Grid,
  Flex,
  Skeleton,
  useColorMode,
  Button,
} from '@chakra-ui/core';
import { useLocation, Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArticle } from '../redux/actions/articleActions';
import GlobalShare from '../util/GlobalShare';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SingleBlog({ getArticle }) {
  const { colorMode } = useColorMode();
  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const color = { light: 'black', dark: 'white' };
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  let { id } = useParams('id');
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const res = await getArticle(id);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [id]);

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
      {data && (
        <Box>
          <Helmet>
            <title>{data.title}</title>
          </Helmet>
          <Box
            pr={['2%', '2%', '7%', '7%']}
            pl={['2%', '2%', '7%', '7%']}
            mb="8"
            textAlign={['center', 'center', 'right']}
          >
            <Heading fontFamily="diodrum-bold !important" mb="2">
              {data.title}
            </Heading>
            <Text fontSize="2xl" fontFamily="diodrum-med !important">
              {data.sub_title}
            </Text>
          </Box>
          <Flex justifyContent="center">
            <Box mb="8" w={['100%', '85%']}>
              <Skeleton w="100%" isLoaded={loaded}>
                <Image
                  loading="lazy"
                  w="100%"
                  mx="auto"
                  onLoad={imageLoaded}
                  src={`${process.env.REACT_APP_STORAGE}/${data.image}`}
                />
              </Skeleton>
            </Box>
          </Flex>

          <Grid
            pr={['2%', '2%', '7%', '7%']}
            pl={['2%', '2%', '7%', '7%']}
            templateColumns={['1fr', '1fr', '0.5fr 2fr', '0.5fr 2fr']}
            gap="10px"
          >
            <Box position="relative">
              <Box
                position="sticky"
                top="0"
                display={['block', 'block', 'block', 'block']}
                textAlign={['center', 'start', 'start', 'start']}
              >
                <Box mb="8">
                  {data.author_image && (
                    <img
                      mt="2"
                      className="detail-image"
                      mb="4"
                      w="70%"
                      src={`${process.env.REACT_APP_STORAGE}/${data.author_image}`}
                    />
                  )}
                  <Heading mb="4" fontFamily="diodrum-med !important" size="md">
                    {data.author}
                  </Heading>
                  {data.author_optional && (
                    <Heading
                      mb="4"
                      fontFamily="diodrum-med !important"
                      size="md"
                    >
                      {data.author_optional}
                    </Heading>
                  )}
                  {data.translator && (
                    <Heading fontFamily="diodrum-med !important" size="sm">
                      ترجمة: {data.translator}
                    </Heading>
                  )}
                  {data.reference && (
                    <Box
                      fontSize="md"
                      dangerouslySetInnerHTML={{
                        __html: data.reference,
                      }}
                    ></Box>
                  )}
                  {data.pdf && (
                    <Box
                      mt="4"
                      fontFamily="diodrum-med !important"
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      <a
                        href={`${process.env.REACT_APP_STORAGE}/${data.pdf}`}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          _hover={{ bg: '#212121' }}
                          bg="black"
                          color="white"
                        >
                          تحميل
                        </Button>
                      </a>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                fontSize="2xl"
                mb="8"
                pl={['2%', '2%', '15%', '15%']}
                pr={['2%', '2%', '0%', '0%']}
                className="dont-break-out"
                dangerouslySetInnerHTML={{
                  __html: data.body,
                }}
              ></Box>

              <Box
                pl={['2%', '2%', '15%', '15%']}
                pr={['2%', '2%', '0%', '0%']}
                dangerouslySetInnerHTML={{
                  __html: data.soundcloud_link,
                }}
              ></Box>
              <Flex mb="8" justifyContent="center">
                <Box
                  pl={['2%', '2%', '15%', '15%']}
                  pr={['2%', '2%', '0%', '0%']}
                  dangerouslySetInnerHTML={{
                    __html: data.youtube_link,
                  }}
                ></Box>
              </Flex>
            </Box>
          </Grid>

          <GlobalShare />

          {data.books && data.books.length > 0 && (
            <Box
              pr="5%"
              pl="3%"
              bg="black"
              borderBottom="1px solid white"
            >
              <Box
                mt="100px"
                mb="4"
                color="white"
              >
                <Heading
                  fontFamily="diodrum-med !important"
                  mr="6%"
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
                  paddingBottom: 10,
                }}
              >
                {data.books.map(book => (
                  <Link key={book.id} to={`/book/${book.id}`}>
                    <Box w="350px" mb="4" pb="4" cursor="pointer">
                      <Image
                        loading="lazy"
                        w="225px"
                        h="350px"
                        m="0 auto"
                        shadow="lg"
                        src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                      />
                      <Box mt="4" textAlign="center">
                        <Text
                          color="white"
                          fontFamily="diodrum-med !important"
                          fontWeight="500"
                          fontSize="xl"
                          mb="8"
                        >
                          {book.title}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Carousel>
            </Box>
          )}

          {data.maitres && data.maitres.length > 0 && (
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
                  mr="5%"
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
                  paddingBottom: 10,
                }}
              >
                {data.maitres.map(article => (
                  <a
                    key={article.id}
                    href={`/singlePost/${article.id}`}
                    style={{ margin: '0 1em' }}
                  >
                    <Box
                      bg="white"
                      pb="4"
                      m="4"
                      w={['100', '100', '100', '100', '355px']}
                      m="0 auto"
                      shadow="lg"
                      cursor="pointer"
                    >
                      <Box p="2">
                        <Image
                          loading="lazy"
                          w="100%"
                          h="200px"
                          src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                        />
                        <Text
                          fontFamily="diodrum-med !important"
                          fontWeight="500"
                          textAlign="center"
                          mt="4"
                          mb="4"
                          pl="4"
                          pr="4"
                        >
                          {article.title}
                        </Text>
                      </Box>
                    </Box>
                  </a>
                ))}
              </Carousel>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default connect(null, { getArticle })(SingleBlog);
