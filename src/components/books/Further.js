import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Skeleton,
  useColorMode,
  Spinner,
} from '@chakra-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import ReactPaginate from 'react-paginate';
import LazyLoad from 'react-lazyload';

import { getBooks } from '../../redux/actions/booksActions';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CatBooks({ translate, furthercoming, getBooks }) {
  const { colorMode } = useColorMode();
  const bg = { light: 'white', dark: '#151a23' };

  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [lastPage, setLastPage] = React.useState(1);

  const query = useQuery();
  const location = useLocation();
  const history = useHistory();

  const imageLoaded = () => {
    setLoaded(true);
  };

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [location.search]);

  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(null, null, translate, furthercoming, currentPage + 1);
      if (res) {
        setData(res.data);
        setLastPage(res.data.meta.last_page);
      }
    }
    getData();
  }, [translate, furthercoming, currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    history.push(`?translate=${translate}&furthercoming=${furthercoming}&page=${selected}`);
  };

  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    700: 1,
  };

  const activeLink = {
    background: '#000',
    color: 'white',
  };

  return (
    <Box>
      <Box>
        <Box d="flex" my="4" justifyContent="flex-end">
          <Link to={`/furthercoming?furthercoming=1&translate=0`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              pt="1"
              pb="4"
              px="5"
              style={translate === '0' ? activeLink : {}}
            >
              عربي
            </Heading>
          </Link>
          <Link to={`/furthercoming?furthercoming=1&translate=1`}>
            <Heading
              fontFamily="diodrum-med !important"
              fontWeight="normal"
              size="md"
              pt="1"
              pb="4"
              px="5"
              style={translate === '1' ? activeLink : {}}
            >
              مترجم
            </Heading>
          </Link>
        </Box>
        {!data && (
          <Box textAlign="center">
            <Spinner size="xl" />
          </Box>
        )}
        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data &&
            data.books &&
            data.books.length !== 0 &&
            data.books.map(book => (
              <Link key={book.id} to={`/book/${book.id}`}>
                <Box mr="4" mt="8" pb="4" shadow="lg" bg={bg[colorMode]}>
                  <LazyLoad once height="350px">
                    <Skeleton w="100%" isLoaded={loaded}>
                      <Image
                        loading="lazy"
                        onLoad={imageLoaded}
                        w="100%"
                        m="0 auto"
                        shadow="lg"
                        src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                      />
                    </Skeleton>
                  </LazyLoad>
                  <Text
                    fontFamily="diodrum-med !important"
                    fontSize="2xl"
                    m="2"
                  >
                    {book?.author[0]?.name}
                  </Text>
                  <Heading fontFamily="diodrum-bold !important" m="4">
                    {book.title}
                  </Heading>
                  <Box
                    m="4"
                    fontSize="xl"
                    className="content"
                    dangerouslySetInnerHTML={{ __html: book.overview }}
                  />
                </Box>
              </Link>
            ))}
        </Masonry>
        {data && data.books && data.books.length !== 0 && (
          <ReactPaginate
            previousLabel={'السابق'}
            nextLabel={'التالى'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={lastPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            forcePage={currentPage}
          />
        )}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, featured, translate, furthercoming, page) =>
      dispatch(getBooks(category, featured, translate, furthercoming, page)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
