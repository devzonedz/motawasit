import React from 'react';

import {
  Box,
  Flex,
  Text,
  useColorMode,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaChevronDown } from 'react-icons/fa';

import {
  FaGoogle,
  FaFacebookF,
  FaHamburger,
  FaShoppingCart,
  FaDollarSign,
  FaSearch,
  FaNewspaper,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#fff', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };

  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: '70px' }}
      as="nav"
      align="center"
      //   justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      //   shadow="lg"
      //   color={color[colorMode]}
      bg={bg[colorMode]}
    >
      <Link to="/books">
        <Text fontWeight="bold" mr="8" ml="8" fontSize="2xl">
          الكل
        </Text>
      </Link>
      <Link to="/featured?featured=1">
        <Text fontWeight="bold" ml="8" fontSize="2xl">
          صدر حديثا
        </Text>
      </Link>

      <Menu>
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          as={Text}
          mt={{ base: 4, md: 0 }}
          ml={8}
          fontSize="2xl"
          fontWeight="bold"
          transition="all 0.2s"
          // _hover={{ bg: 'gray.100' }}
          // _focus={{ outline: 0, boxShadow: 'outline' }}
        >
          مواضيع
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
              to="/books_by_category/دراسات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
              to="/books_by_category/روايات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
              to="/books_by_category/شعر المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
              to="/books_by_category/قصص المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
                      القصة القصيرة
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category/فلسفة المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
              to="/books_by_category/كتب السيرة"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
              to="/books_by_category/يوميات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
              to="/books_by_category/معاجم وقواميس المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
                      المعاجم والقواميس
                    </Heading>
                  </Box>
                </MenuItem>
              </Box>
            </Link>
            <Link
              style={{ margin: '50px !important' }}
              onClick={handleToggle}
              to="/books_by_category/منوعات المتوسط"
            >
              <Box m="4">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading fontSize={['lg', 'lg', '2xl', '2xl']}>
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
      <Link>
        <Text fontWeight="bold" ml="8" fontSize="2xl">
          سلاسل
        </Text>
      </Link>
      <Link to="furthercoming?furthercoming=1">
        <Text fontWeight="bold" ml="8" fontSize="2xl">
          يصدر قريبا
        </Text>
      </Link>
    </Flex>
  );
}
