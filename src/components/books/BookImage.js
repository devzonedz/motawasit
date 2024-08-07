import React from 'react';
import {
  Box,
  Image,
  Text,
  Skeleton,
  useColorMode,
} from '@chakra-ui/core';
import LazyLoad from 'react-lazyload';

function BookImage({ book }) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { colorMode } = useColorMode();
  const bg = { light: 'white', dark: '#151a23' };

  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };

  const handleError = () => {
    setLoaded(true);
    setError(true);
  };

  return (
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
          {error ? (
            <Box height="350px" display="flex" alignItems="center" justifyContent="center" bg={bg[colorMode]}>
              <Text>Failed to load image</Text>
            </Box>
          ) : (
            <Image
              loading="lazy"
              onLoad={handleLoad}
              onError={handleError}
              w="100%"
              h="350px"
              m="0 auto"
              shadow="lg"
              src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
              alt={`${book.title} cover`}
              objectFit="cover"
            />
          )}
        </Skeleton>
      </LazyLoad>
      <Text fontFamily="diodrum-med !important" fontSize="2xl" m="2">
        {book?.author[0]?.name}
      </Text>
      <Text
        fontFamily="diodrum-bold !important"
        m="4"
        fontSize={{ base: 'md', md: '2xl' }}
      >
        {book.title}
      </Text>
      <Box
        style={{ fontWeight: '400' }}
        m="4"
        className="content books__content"
        dangerouslySetInnerHTML={{ __html: book.overview }}
      />
    </Box>
  );
}

export default BookImage;