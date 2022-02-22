import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Helmet } from 'react-helmet';
// import parse from 'html-react-parser';

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
import { getPodcast } from '../redux/actions/poscastsActions.js';

import GlobalShare from '../util/GlobalShare';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SinglePodcast({ getPodcast }) {
  const { colorMode, toggleColorMode } = useColorMode();

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
      const res = await getPodcast(id);
      console.log(res.data.podcast.title);
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
    <Box mt={{ base: '2em', md: '6em' }}>
      {data && (
        <Box>
          <Helmet>
            <title>{data.podcast.title}</title>
          </Helmet>
          <Box
            px={['2%', '2%', '7%', '7%']}
            mb="8"
            textAlign={['center', 'center', 'right']}
          >
            <Heading fontFamily="diodrum-bold !important" mb="2">
              {' '}
              {data.title}{' '}
            </Heading>
            <Text fontSize="2xl" fontFamily="diodrum-med !important">
              {data.podcast.title}
            </Text>
            {/* <Link key={data.author_id} to={`/author/${data.author_id}`}>
              <Text
                fontFamily="diodrum-med !important"
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
            </Link> */}
          </Box>
          {/*<Flex justifyContent="center">*/}
          {/*    <Box mb="8" w="85%">*/}
          {/*        <Skeleton w="100%" isLoaded={loaded}>*/}
          {/*            <Image*/}
          {/*                loading="lazy"*/}
          {/*                w="100%"*/}
          {/*                onLoad={imageLoaded}*/}
          {/*                src={`${process.env.REACT_APP_STORAGE}/${data.podcast.image}`}*/}
          {/*            ></Image>*/}
          {/*        </Skeleton>*/}
          {/*    </Box>*/}
          {/*</Flex>*/}

          <Grid
            px={['2%', '2%', '7%', '7%']}
            templateColumns={['1fr', '1fr', '1fr', '2fr 0.5fr', '0.5fr 2fr']}
            gap="10px"
          >
            <Flex justifyContent="center">
              <Box mb="8" w="85%">
                <Skeleton
                  w={['300px', '300px', '300px', '300px', '500px']}
                  isLoaded={loaded}
                >
                  <Image
                    loading="lazy"
                    w="100%"
                    onLoad={imageLoaded}
                    src={`${process.env.REACT_APP_STORAGE}/${data.podcast.image}`}
                  ></Image>
                </Skeleton>
              </Box>
            </Flex>
            <Box m={4}>
              <Box
                className="videowrapper"
                pl={['4%', '2%', '15%', '15%']}
                pr={['2%', '2%', '0%', '7%']}
                dangerouslySetInnerHTML={{
                  __html: data.podcast.url,
                }}
              ></Box>

              <Box
                fontSize="2xl"
                mt={8}
                mb="8"
                pl={['2%', '2%', '15%', '15%']}
                pr={['2%', '2%', '0%', '7%']}
                className="dont-break-out"
                dangerouslySetInnerHTML={{
                  __html: data.podcast.description,
                }}
              ></Box>
            </Box>
          </Grid>

          <GlobalShare></GlobalShare>
          {data.others && (
            <Box
              pr="5%"
              pl="3%"
              //   bg={bg[colorMode]}
              bg="black"
              borderBottom="1px solid white"
            >
              <Box
                mt="100px"
                mb="4"
                //    color={color[colorMode]}
                color="white"
              >
                <Heading
                  fontFamily="diodrum-med !important"
                  mr="6%"
                  p="4"
                  size="lg"
                >
                  روابط ذات صلة
                </Heading>
              </Box>
              <Carousel
                breakPoints={bookBreakPoints}
                isRTL={true}
                style={{
                  //   marginTop: 100,

                  paddingBottom: 10,
                }}
                // itemsToScroll={3}
                // itemsToShow={3}
              >
                {data.others.map(other => (
                  <Link key={other.id} to={`/singlePodcast/${other.id}`}>
                    <Box w="350px" mb="4" pb="4" cursor="pointer">
                      <Image
                        loading="lazy"
                        w="200px"
                        h="auto"
                        m="0 auto"
                        shadow="lg"
                        src={`${process.env.REACT_APP_STORAGE}/${other.image}`}
                      ></Image>
                      <Box mt="4" textAlign="center">
                        <Text
                          color="white"
                          fontFamily="diodrum-med !important"
                          fontWeight="500"
                          fontSize="xl"
                          mb="8"
                        >
                          {other.title}
                        </Text>
                        {/* <Text fontSize="md">{book.sub_title}</Text>
                        <Text fontSize="sm">{book.author}</Text>
                        <Text fontWeight="bold">${book.price}</Text> */}
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
  return { getPodcast: id => dispatch(getPodcast(id)) };
};

export default connect(null, mapDispatchToProps)(SinglePodcast);
