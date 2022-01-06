import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Box,
  Flex,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  DrawerHeader,
  IconButton,
  SimpleGrid,
  Center,
  useMediaQuery,
  Spinner,
  useDisclosure,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink, Link } from 'react-router-dom';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { connect } from 'react-redux';
import { getSeries, getCat } from '../../redux/actions/seriesActions';

function Navbar({ getSeries, getCat }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan420] = useMediaQuery('(max-width:420px)');
  const [isLargerThan790] = useMediaQuery('(min-width: 790px)');
  const { colorMode } = useColorMode();

  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [cat, setCat] = useState(null);

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };

  const hoverBg = { light: '#000', dark: 'white' };
  const hoverClr = { light: 'white', dark: '#000' };

  useEffect(() => {
    async function getData() {
      const categories = await getCat();
      if (categories) {
        console.log(categories);
        setCat(categories.data);
      }
      const res = await getSeries();
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const handleToggle = () => setShow(!show);

  const onOpened = () => {
    document.body.style.overflow = 'hidden';
  };

  const onClosed = () => {
    document.body.style.overflow = '';
  };

  return (
    <Flex
      borderBottom="1px solid #ddd"
      className={'filterNavTop'}
      as="nav"
      align="center"
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']}
    >
      {!isLargerThan790 && (
        <IconButton
          mr="1em"
          onClick={onOpen}
          icon={<GiHamburgerMenu size="25px" />}
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
        />
      )}
      {isLargerThan790 && (
        <Flex>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
            }}
            to="/featured?featured=1"
          >
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
            >
              <Text
                whiteSpace="nowrap"
                fontWeight="bold"
                p="4"
                fontSize={['lg', '2xl']}
                fontFamily="diodrum-med !important"
              >
                آخر الإصدارات
              </Text>
            </Flex>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
            }}
            to="/books"
          >
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
            >
              <Text
                whiteSpace="nowrap"
                fontWeight="bold"
                p="4"
                fontSize={['lg', '2xl']}
                fontFamily="diodrum-med !important"
              >
                جميعها
              </Text>
            </Flex>
          </NavLink>

          <Menu onOpen={onOpened} onClose={onClosed}>
            <MenuButton
              display="block"
              // px={4}
              // py={2}
              whiteSpace="nowrap"
              as={Text}
              //   mt={{ base: 4, md: 0 }}
              p="4"
              fontSize={['lg', '2xl']}
              fontWeight="bold"
              transition="all 0.2s"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              // _hover={{ bg: 'gray.100' }}
              // _focus={{ outline: 0, boxShadow: 'outline' }}
              fontFamily="diodrum-med !important"
              cursor="pointer"
            >
              حسب الصنف
              <FaChevronDown
                style={{
                  display: 'inline',
                  fontSize: 15,
                  marginRight: 3,
                  marginTop: 5,
                }}
              ></FaChevronDown>{' '}
            </MenuButton>
            <MenuList
              h="60vh"
              w="100vw"
              color="white"
              overflowY={{ base: 'scroll', sm: 'scroll' }}
              bg={filter[colorMode]}
            >
              {!data && (
                <Box w="100" mt="50" mb="50" textAlign="center">
                  <Spinner size="xl" />
                </Box>
              )}
              <SimpleGrid
                pl={['5%', '5%', '15%', '15%']}
                pr={['5%', '5%', '15%', '15%']}
                py={['5%', '0%', '0%', '0%']}
                columns={[1, 2, 3, 3, 4]}
              >
                {cat &&
                  cat.map(category => {
                    if (isSmallerThan420) {
                      return (
                        <Center>
                          <Link
                            key={category.id}
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_category?category=${category.key}`}
                          >
                            <Box m={['0.9', '4']}>
                              <MenuItem
                                _focus={{ bg: 'white', color: 'black' }}
                                _hover={{ bg: 'white', color: 'black' }}
                                fontSize="xl"
                              >
                                <Box display="flex">
                                  <Heading
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                  >
                                    {category.name}
                                  </Heading>
                                </Box>
                              </MenuItem>
                            </Box>
                          </Link>
                        </Center>
                      );
                    } else {
                      return (
                        <Link
                          key={category.id}
                          style={{ margin: '50px !important' }}
                          onClick={handleToggle}
                          to={`/books_by_category?category=${category.key}`}
                        >
                          <Box m={['0.9', '4']}>
                            <MenuItem
                              _focus={{ bg: 'white', color: 'black' }}
                              _hover={{ bg: 'white', color: 'black' }}
                              fontSize="xl"
                            >
                              <Box display="flex">
                                <Heading
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {category.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                      );
                    }
                  })}
              </SimpleGrid>
            </MenuList>
          </Menu>
          <Menu onOpen={onOpened} onClose={onClosed}>
            <MenuButton
              display="block"
              // px={4}
              // py={2}
              whiteSpace="nowrap"
              as={Text}
              //   mt={{ base: 4, md: 0 }}
              p="4"
              fontSize={['lg', '2xl']}
              fontWeight="bold"
              transition="all 0.2s"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              // _hover={{ bg: 'gray.100' }}
              // _focus={{ outline: 0, boxShadow: 'outline' }}
              fontFamily="diodrum-med !important"
              cursor="pointer"
            >
              سلسلات
              <FaChevronDown
                style={{
                  display: 'inline',
                  fontSize: 15,
                  marginRight: 3,
                  marginTop: 5,
                }}
              ></FaChevronDown>{' '}
            </MenuButton>
            <MenuList
              h="60vh"
              w="100vw"
              color="white"
              overflowY={{ base: 'scroll', sm: 'scroll' }}
              bg={filter[colorMode]}
            >
              {!data && (
                <Box w="100" mt="50" mb="50" textAlign="center">
                  <Spinner size="xl" />
                </Box>
              )}
              <SimpleGrid
                pl={['5%', '5%', '15%', '15%']}
                pr={['5%', '5%', '15%', '15%']}
                py={['5%', '0%', '0%', '0%']}
                columns={[1, 2, 3, 3, 4]}
              >
                {data &&
                  data.map(serie => {
                    if (isSmallerThan420) {
                      return (
                        <Center>
                          <Link
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_series?serie=${serie.name} `}
                          >
                            <Box m={['0.9', '4']}>
                              <MenuItem
                                _focus={{ bg: 'white', color: 'black' }}
                                _hover={{ bg: 'white', color: 'black' }}
                                fontSize="xl"
                              >
                                <Box textAlign="right" display="flex">
                                  <Heading
                                    dir="rtl"
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                  >
                                    {serie.name}
                                  </Heading>
                                </Box>
                              </MenuItem>
                            </Box>
                          </Link>
                        </Center>
                      );
                    } else {
                      return (
                        <Link
                          style={{ margin: '50px !important' }}
                          onClick={handleToggle}
                          to={`/books_by_series?serie=${serie.name} `}
                        >
                          <Box m={['0.9', '4']}>
                            <MenuItem
                              _focus={{ bg: 'white', color: 'black' }}
                              _hover={{ bg: 'white', color: 'black' }}
                              fontSize="xl"
                            >
                              <Box textAlign="right" display="flex">
                                <Heading
                                  dir="rtl"
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {serie.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                      );
                    }
                  })}
              </SimpleGrid>
            </MenuList>
          </Menu>
          {/* <Link>
        <Text
          whiteSpace="nowrap"
          fontWeight="bold"
          ml="8"
          fontSize={['lg', '2xl']}
        >
          سلسلات
        </Text>
      </Link> */}
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
              height: '100%',
            }}
            to="furthercoming?furthercoming=1"
          >
            <Flex
              h="100%"
              direction="column"
              justifyContent="center"
              _hover={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _focus={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
              _active={{
                bg: hoverBg[colorMode],
                color: hoverClr[colorMode],
              }}
            >
              <Text
                whiteSpace="nowrap"
                fontWeight="bold"
                p="4"
                fontSize={['lg', '2xl']}
                fontFamily="diodrum-med !important"
              >
                يأتي قريباً
              </Text>
            </Flex>
          </NavLink>
        </Flex>
      )}

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent
          bg={colorMode === 'dark' ? bg[colorMode] : '#000'}
          color="white"
        >
          <DrawerHeader p="0">
            <IconButton
              p={8}
              onClick={onClose}
              icon={<FaTimes size="25px" />}
              bg="transparent"
              _hover={{ bg: 'transparent' }}
              _focus={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
            />
          </DrawerHeader>
          <DrawerBody p="0" mt="2em">
            <Flex direction="column">
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: 'black',
                  height: '100%',
                  marginLeft: 5,
                }}
                to="/featured?featured=1"
              >
                <Flex
                  h="100%"
                  direction="column"
                  justifyContent="center"
                  pt=".5em"
                  pb="1em"
                  px="1em"
                  _hover={{ bg: 'white', color: '#000' }}
                  _focus={{ bg: 'white', color: '#000' }}
                  _active={{ bg: 'white', color: '#000' }}
                >
                  <Text
                    whiteSpace="nowrap"
                    fontWeight="bold"
                    ml="4"
                    mr="4"
                    fontSize={['lg', '2xl']}
                    fontFamily="diodrum-med !important"
                  >
                    آخر الإصدارات
                  </Text>
                </Flex>
              </NavLink>
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: 'black',
                  height: '100%',
                  marginLeft: 5,
                }}
                to="/books"
              >
                <Flex
                  h="100%"
                  direction="column"
                  justifyContent="center"
                  pt=".5em"
                  pb="1em"
                  px="1em"
                  _hover={{ bg: 'white', color: '#000' }}
                  _focus={{ bg: 'white', color: '#000' }}
                  _active={{ bg: 'white', color: '#000' }}
                >
                  <Text
                    whiteSpace="nowrap"
                    fontWeight="bold"
                    ml="4"
                    mr="4"
                    fontSize={['lg', '2xl']}
                    fontFamily="diodrum-med !important"
                  >
                    جميعها
                  </Text>
                </Flex>
              </NavLink>
              <Accordion allowToggle>
                <AccordionItem border="none">
                  <AccordionButton
                    pt=".5em"
                    pb="1em"
                    px="2em"
                    _hover={{ bg: 'white', color: '#000' }}
                    _focus={{ bg: 'white', color: '#000' }}
                    __active={{ bg: 'transparent' }}
                  >
                    <Text
                      whiteSpace="nowrap"
                      fontWeight="bold"
                      fontSize={['lg', '2xl']}
                      fontFamily="diodrum-med !important"
                    >
                      حسب الصنف
                    </Text>
                    <AccordionIcon fontSize="25px" mb="-15px" />
                  </AccordionButton>
                  <AccordionPanel
                    pb={4}
                    pt="0"
                    px="0"
                    borderRight="1px solid"
                    borderColor="gray.400"
                  >
                    {!data && (
                      <Box w="100" mt="50" mb="50" textAlign="center">
                        <Spinner size="xl" />
                      </Box>
                    )}
                    {cat &&
                      cat.map(category => {
                        return (
                          <Link
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_category?category=${category.key}`}
                            key={category.id}
                          >
                            <Box
                              pt=".4em"
                              pb=".8em"
                              px="1em"
                              _hover={{ bg: 'white', color: '#000' }}
                              _focus={{ bg: 'white', color: '#000' }}
                              _active={{ bg: 'white', color: '#000' }}
                            >
                              <Box textAlign="right">
                                <Heading
                                  dir="rtl"
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {category.name}
                                </Heading>
                              </Box>
                            </Box>
                          </Link>
                        );
                      })}
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <AccordionButton
                    pt=".5em"
                    pb="1em"
                    px="2em"
                    _hover={{ bg: 'white', color: '#000' }}
                    _focus={{ bg: 'white', color: '#000' }}
                    __active={{ bg: 'transparent' }}
                  >
                    <Text
                      whiteSpace="nowrap"
                      fontWeight="bold"
                      fontSize={['lg', '2xl']}
                      fontFamily="diodrum-med !important"
                    >
                      سلسلات
                    </Text>
                    <AccordionIcon fontSize="25px" mb="-15px" />
                  </AccordionButton>
                  <AccordionPanel
                    pb={4}
                    pt="0"
                    px="0"
                    borderRight="1px solid"
                    borderColor="gray.400"
                  >
                    {!data && (
                      <Box w="100" mt="50" mb="50" textAlign="center">
                        <Spinner size="xl" />
                      </Box>
                    )}
                    {data &&
                      data.map(serie => {
                        return (
                          <Link
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_series?serie=${serie.name} `}
                            key={serie.id}
                          >
                            <Box
                              pt=".4em"
                              pb=".8em"
                              px="1em"
                              _hover={{ bg: 'white', color: '#000' }}
                              _focus={{ bg: 'white', color: '#000' }}
                              _active={{ bg: 'white', color: '#000' }}
                            >
                              <Box textAlign="right">
                                <Heading
                                  dir="rtl"
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {serie.name}
                                </Heading>
                              </Box>
                            </Box>
                          </Link>
                        );
                      })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getSeries: () => dispatch(getSeries()),
    getCat: () => dispatch(getCat()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
