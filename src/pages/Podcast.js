import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { getPodcasts } from '../redux/actions/poscastsActions';
import { Helmet } from 'react-helmet';

function Podcasts({ getPodcasts }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const res = await getPodcasts();
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const artic =
    data && Object.keys(data.articles).map(key => data.articles[key]);
  console.log(artic);
  return (
    <Box mt="100px" mb="700px" pl="10%" pr="10%">
      {data && (
        <Box>
          <Helmet>
            <title>بودكاست</title>
          </Helmet>
          <Heading mt="8" size="xl">
            بودكاست الكتب
          </Heading>
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {data.books.length !== 0 &&
              data.books.map(podcast => (
                <iframe
                  title={data.title}
                  width="100%"
                  height="100"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={podcast}
                ></iframe>
              ))}
          </SimpleGrid>
          <Heading mt="8" size="xl">
            بودكاست المقالات
          </Heading>
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {artic.length !== 0 &&
              artic.map(podcast => (
                <iframe
                  title={data.title}
                  width="100%"
                  height="100"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={podcast}
                ></iframe>
              ))}
          </SimpleGrid>
          <Heading mt="8" size="xl">
            بودكاست براءات
          </Heading>
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {data.podcasts.length !== 0 &&
              data.podcasts.map(podcast => (
                <iframe
                  title={data.title}
                  width="100%"
                  height="100"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={podcast}
                ></iframe>
              ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getPodcasts: () => dispatch(getPodcasts()) };
};

export default connect(null, mapDispatchToProps)(Podcasts);
