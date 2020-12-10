import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

import {
  Button,
  ButtonGroup,
  Heading,
  Box,
  Text,
  Image,
  Center,
  SimpleGrid,
  Input,
  Flex,
  Skeleton,
} from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { getArticles } from '../redux/actions/articleActions';

function Blog({ getArticles }) {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getArticles('مدونة المتوسط');
      console.log(res);
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
      {/* <SimpleGrid m="8" columns={[1, 1, 3, 3]} spacing="8"> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.articles.map(article => (
            <Link to={`/singlePost?id=${article.id}`}>
              <Box
                bg="white"
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
