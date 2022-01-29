import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { getPodcasts } from '../redux/actions/poscastsActions';
import { Helmet } from 'react-helmet';

import PodcastModal from '../components/PodcastModal';

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

  return (
    <Box mt="100px" mb="700px" pl="10%" pr="10%">
      {data && (
        <Box>
          <Helmet>
            <title> بودكاست المتوسط</title>
          </Helmet>
          {/*
          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {books.length !== 0 &&
              books.map(podcast => (
                <PodcastBookModal podcast={podcast}></PodcastBookModal>
              ))}
          </SimpleGrid>

          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {artic.length !== 0 &&
              artic.map(podcast => (
                <PodcastArticleModal podcast={podcast}></PodcastArticleModal>
              ))}
          </SimpleGrid> */}

          <SimpleGrid mt="8" mb="4" columns={[1, 1, 3, 3]} spacing="8">
            {data.podcasts.length !== 0 &&
              data.podcasts.map(podcast => (
                <PodcastModal podcast={podcast}></PodcastModal>
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
