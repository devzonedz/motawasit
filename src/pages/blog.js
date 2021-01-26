import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';

import {
  Heading,
  Box,
  Image,
  Skeleton,
  useColorMode,
  Spinner,
} from '@chakra-ui/core';

import { connect } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';

function Blog({ getArticles }) {
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getArticles('مدونة المتوسط');
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);
  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1100: 2,
    1000: 1,
  };

  return (
    <Box m="7%">
      <Helmet>
        <title>المدونة</title>
      </Helmet>
      {/* <SimpleGrid m="8" columns={[1, 1, 3, 3]} spacing="8"> */}
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.articles.map(article => (
            <Link to={`/singlePost?id=${article.id}`}>
              <Box
                bg={bg[colorMode]}
                w="100%"
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
                      onLoad={imageLoaded}
                      src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                    ></Image>
                  </Skeleton>
                  <Heading fontFamily="diodrum-med !important" m="2" size="lg">
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
      </Masonry>
      {/* </SimpleGrid> */}
      {/* <Flex m="8" justifyContent="center">
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={8}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </Flex> */}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getArticles: page => dispatch(getArticles(page)) };
};

export default connect(null, mapDispatchToProps)(Blog);
