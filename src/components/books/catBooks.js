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
import { getBooks } from '../../redux/actions/booksActions';
import Masonry from 'react-masonry-css';
import LazyLoad from 'react-lazyload';
import ReactPaginate from 'react-paginate';

function CatBooks({ translate, getBooks }) {
  const { colorMode } = useColorMode();
  const bg = { light: 'white', dark: '#151a23' };

  const [loaded, setLoaded] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [lastPage, setLastPage] = React.useState(1);

  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    // Extract page number from URL parameters
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [location.search]);

  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(null, null, translate, null, currentPage + 1);
      if (res) {
        setData(res.data);
        setLastPage(res.data.meta.last_page);
      }
    }
    getData();
  }, [currentPage, translate]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    // Update URL with the current page number
    history.push(`?translate=${translate}&page=${selected}`);
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
      <Box d="flex">
        <Link to={`/books?translate=0&page=${currentPage}`}>
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            my="2"
            py="2"
            px="4"
            pb="4"
            style={translate === '0' ? activeLink : {}}
          >
            عربي
          </Heading>
        </Link>
        <Link to={`/books?translate=1&page=${currentPage}`}>
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            my="2"
            py="2"
            px="4"
            pb="4"
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
              <Box
                mb="8"
                pb="4"
                shadow="lg"
                bg={bg[colorMode]}
                maxW="400px"
                mx="auto"
              >
                <LazyLoad once height="350px">
                  <Skeleton w="100%" isLoaded={loaded}>
                    <Image
                      loading="lazy"
                      onLoad={() => setLoaded(true)}
                      w="100%"
                      m="0 auto"
                      shadow="lg"
                      src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                    />
                  </Skeleton>
                </LazyLoad>
                <Text fontFamily="diodrum-med !important" fontSize="2xl" m="2">
                  {book?.author[0]?.name}
                </Text>
                <Heading
                  fontFamily="diodrum-bold !important"
                  m="4"
                  fontSize={{ base: 'md', md: '2xl' }}
                >
                  {book.title}
                </Heading>
                <Box
                  style={{ fontWeight: '400' }}
                  m="4"
                  className="content books__content"
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
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, featured, furthercoming, translate, page) =>
      dispatch(getBooks(category, featured, furthercoming, translate, page)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
