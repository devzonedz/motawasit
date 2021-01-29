import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { getVideos } from '../redux/actions/poscastsActions';
import { Helmet } from 'react-helmet';

function Podcasts({ getVideos }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const res = await getVideos();
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const artic =
    data && Object.keys(data.articles).map(key => data.articles[key]);
  const books = data && Object.keys(data.books).map(key => data.books[key]);
  return (
    <Box mt="100px" mb="700px" pl="10%" pr="10%">
      {data && (
        <Box>
          <Helmet>
            <title>فيديو</title>
          </Helmet>
          {/* <Heading fontFamily="diodrum-bold !important" mt="8" size="xl">
            بودكاست الكتب
          </Heading> */}
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {books.length !== 0 &&
              books.map(podcast => (
                <Box>
                  <Heading fontFamily="diodrum-med !important" size="md" mb="4">
                    {podcast.title}
                  </Heading>
                  <iframe
                    title={data.title}
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={podcast}
                  ></iframe>
                </Box>
              ))}
          </SimpleGrid>
          {/* <Heading fontFamily="diodrum-bold !important" mt="8" size="xl">
            بودكاست المقالات
          </Heading> */}
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {artic.length !== 0 &&
              artic.map(podcast => (
                <Box>
                  <Heading fontFamily="diodrum-med !important" size="md" mb="4">
                    {podcast.title}
                  </Heading>
                  <iframe
                    title={data.title}
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={podcast}
                  ></iframe>
                </Box>
              ))}
          </SimpleGrid>
          {/* <Heading fontFamily="diodrum-bold !important" mt="8" size="xl">
            بودكاست براءات
          </Heading> */}
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {data.podcasts.length !== 0 &&
              data.podcasts.map(podcast => (
                <Box>
                  <Heading fontFamily="diodrum-med !important" size="md" mb="4">
                    {podcast.title}
                  </Heading>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: podcast.url,
                    }}
                  ></Box>
                </Box>
              ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getVideos: () => dispatch(getVideos()) };
};

export default connect(null, mapDispatchToProps)(Podcasts);
