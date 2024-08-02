import React, { useState, useCallback } from 'react';
import {
  Box,
  Flex,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Image,
  SimpleGrid,
  Heading,
  useBreakpointValue,
  Center,
  Spinner,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearch } from '../../redux/actions/searchActions';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShop } from 'react-icons/ai';
import Newsletter from './NewsLetter';
import hdark from '../../images/hdark.png';
import hlight from '../../images/hlight.png';
import { MagazineIcon } from '../MagazineIcon';
import { debounce } from 'lodash';

function Navbar({ getSearch, searchResults, isLoading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState('');

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };

  // Debounce the search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.trim()) {
        getSearch(query);
      }
    }, 300),
    [getSearch]
  );

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
    debouncedSearch(newValue);
  };

  const CustomSearchBox = () => (
    <Input
      className="search-box"
      color="black"
      bg="white"
      placeholder=" ابحث عن الكتب,المقالات,الكتاب ..."
      type="search"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );

  const navClassName = useBreakpointValue({ base: '', md: 'topNavbar' });

  return (
    <Flex
      h="70px"
      className={navClassName}
      borderBottom="1px solid #ddd"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      color={color[colorMode]}
      bg={bg[colorMode]}
    >
      <Box
        ml="8%"
        d="flex"
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <a href={process.env.REACT_APP_HOME} target="_blank" rel="noreferrer">
          <Box
            cursor="pointer"
            d="flex"
            rounded="5px"
            color={color[colorMode]}
            m="3px"
            w="50px"
            h="50px"
            fontSize="30px"
            position="relative"
            fontWeight="bold"
            justifyContent="center"
          >
            {colorMode === 'light' ? (
              <Image rounded="5px" w="50px" h="50px" src={hdark}></Image>
            ) : (
              <Image rounded="5px" w="50px" h="50px" src={hlight}></Image>
            )}
          </Box>
        </a>

        <Link to="/magazine">
          <Center
            cursor="pointer"
            rounded="5px"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            w="50px"
            h="50px"
            fontSize="28px"
          >
            <MagazineIcon />
          </Center>
        </Link>

        <Box fontSize="18px">
          <Box
            rounded="5px"
            onClick={onOpen}
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            w="50px"
            h="50px"
            fontSize="28px"
          >
            <FaSearch></FaSearch>
          </Box>
          <Drawer
            placement="bottom"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay>
              <DrawerContent pt={['100px', '0']} bg="black" color="white">
                <DrawerCloseButton
                  position="absolute"
                  top="50px"
                  left="10px"
                  right="none"
                  mt={['100px', '0']}
                />

                <DrawerHeader fontSize="36px">بحث</DrawerHeader>
                <DrawerBody>
                  <CustomSearchBox />
                  {isLoading ? (
                    <Center mt={4}>
                      <Spinner />
                    </Center>
                  ) : (
                    <Box mt={4}>
                      {searchResults.books && searchResults.books.length > 0 && (
                        <Box>
                          <Heading m="8">كتب</Heading>
                          <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
                            {searchResults.books.map(book => (
                              <Link onClick={onClose} key={book.id} to={`/book/${book.id}`}>
                                <Image
                                  loading="lazy"
                                  src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                                />
                                <Heading size="md" mt="2">
                                  {book.title}
                                </Heading>
                              </Link>
                            ))}
                          </SimpleGrid>
                        </Box>
                      )}
                      {searchResults.authors && searchResults.authors.length > 0 && (
                        <Box>
                          <Heading m="8">كتاب</Heading>
                          <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
                            {searchResults.authors.map(author => (
                              <Link onClick={onClose} key={author.id} to={`/author/${author.id}`}>
                                <Image
                                  loading="lazy"
                                  src={`${process.env.REACT_APP_STORAGE}/${author.image}`}
                                />
                                <Heading size="md" mt="2">
                                  {author.name}
                                </Heading>
                              </Link>
                            ))}
                          </SimpleGrid>
                        </Box>
                      )}
                      {searchResults.articles && searchResults.articles.length > 0 && (
                        <Box>
                          <Heading m="8">مقالات</Heading>
                          <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
                            {searchResults.articles.map(article => (
                              <Link onClick={onClose} key={article.id} to={`/article/${article.id}`}>
                                <Image
                                  loading="lazy"
                                  src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                                />
                                <Heading size="md" mt="2">
                                  {article.title}
                                </Heading>
                              </Link>
                            ))}
                          </SimpleGrid>
                        </Box>
                      )}
                    </Box>
                  )}
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
        <Newsletter></Newsletter>
        <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_SHOP}>
          <Box
            rounded="5px"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            w="50px"
            h="50px"
            fontSize="28px"
          >
            <AiOutlineShop></AiOutlineShop>
          </Box>
        </a>
      </Box>
    </Flex>
  );
}

const mapStateToProps = state => ({
  searchResults: state.search.results,
  isLoading: state.search.isLoading,
});

const mapDispatchToProps = {
  getSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);