import React from 'react';

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
  SimpleGrid,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink, Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import { connect } from 'react-redux';
import { getSeries } from '../../redux/actions/seriesActions';

function Navbar({ getSeries }) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const res = await getSeries();
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: '70px' }}
      as="nav"
      align="center"
      //   justify="space-between"

      //   padding="0.5rem"
      //   shadow="lg"
      //   color={color[colorMode]}
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']}
    >
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
        <Flex h="100%" direction="column" justifyContent="center">
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
        <Flex h="100%" direction="column" justifyContent="center">
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

      <Menu>
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          whiteSpace="nowrap"
          as={Text}
          //   mt={{ base: 4, md: 0 }}
          ml={8}
          fontSize={['lg', '2xl']}
          fontWeight="bold"
          transition="all 0.2s"
          // _hover={{ bg: 'gray.100' }}
          // _focus={{ outline: 0, boxShadow: 'outline' }}
          fontFamily="diodrum-med !important"
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
        <MenuList w="100vw" color="white" bg={filter[colorMode]} shadow="xl">
          <SimpleGrid
            pl={['5%', '5%', '20%', '20%']}
            pr={['5%', '5%', '20%', '20%']}
            columns={3}
          >
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=دراسات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      الدراسات
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=روايات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      الرواية
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=شعر المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      الشعر
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=قصص المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      القصة القصيرة
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=فلسفة المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      الفلسفة
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=كتب السيرة"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      سير ذاتية
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=يوميات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      يوميات عربية
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>

            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=معاجم وقواميس المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      المعاجم والقواميس
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category?category=منوعات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-med !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      منوعات
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
          </SimpleGrid>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          whiteSpace="nowrap"
          as={Text}
          //   mt={{ base: 4, md: 0 }}
          ml={8}
          fontSize={['lg', '2xl']}
          fontWeight="bold"
          transition="all 0.2s"
          // _hover={{ bg: 'gray.100' }}
          // _focus={{ outline: 0, boxShadow: 'outline' }}
          fontFamily="diodrum-med !important"
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
        <MenuList w="100vw" color="white" bg={filter[colorMode]} shadow="xl">
          <SimpleGrid
            pl={['5%', '5%', '20%', '20%']}
            pr={['5%', '5%', '20%', '20%']}
            columns={3}
          >
            {data &&
              data.map(serie => (
                <Link
                  style={{ margin: '50px !important' }}
                  onClick={handleToggle}
                  to={`/books_by_series?serie=${serie.name} `}
                >
                  <Box m="4">
                    <MenuItem
                      _focus={{ bg: 'white', color: 'black' }}
                      _hover={{ bg: 'white', color: 'black' }}
                      fontSize="xl"
                    >
                      <Box textAlign="right" display="flex">
                        <Heading
                          dir="rtl"
                          fontFamily="diodrum-med !important"
                          fontSize={['lg', 'lg', '2xl', '2xl']}
                        >
                          {serie.name}
                        </Heading>
                      </Box>
                    </MenuItem>
                  </Box>
                </Link>
              ))}
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
          marginLeft: 5,
        }}
        to="furthercoming?furthercoming=1"
      >
        <Flex h="100%" direction="column" justifyContent="center">
          <Text
            whiteSpace="nowrap"
            fontWeight="bold"
            ml="4"
            mr="4"
            fontSize={['lg', '2xl']}
            fontFamily="diodrum-med !important"
          >
            يأتي قريباً
          </Text>
        </Flex>
      </NavLink>
    </Flex>
  );
}

const mapDispatchToProps = dispatch => {
  return { getSeries: () => dispatch(getSeries()) };
};

export default connect(null, mapDispatchToProps)(Navbar);
