import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Badge,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Icon,
  useToast,
  useColorMode,
  Button,
  SimpleGrid,
  Image,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  FaGoogle,
  FaFacebookF,
  FaHamburger,
  FaShoppingCart,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronUp } from 'react-icons/fa';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Transition from '../../util/Transition';

import logo from '../../images/logo.png';

function ShopBadge(props) {
  return (
    <Link to="/cart">
      <Box cursor="pointer" mt={{ base: '15px', md: '0' }} display="flex">
        <Badge
          rounded="20px"
          fontWeight="bold"
          fontSize="xl"
          ml="1"
          colorScheme="green"
        >
          5
        </Badge>
        <FaShoppingCart fontSize="28px"></FaShoppingCart>
      </Box>
    </Link>
  );
}

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#000000', dark: '#1a202c' };
  const color = { light: 'white', dark: 'white' };

  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      className="navbar"
      style={{ position: 'fixed', width: '100%', zIndex: '99', bottom: 0 }}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      borderTop="1px solid white"
      //   shadow="lg"
      color={color[colorMode]}
      bg={bg[colorMode]}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/home">
          <Heading
            cursor="pointer"
            fontWeight="bold"
            as="h1"
            fontSize="36px"
            letterSpacing={'-.1rem'}
          >
            <Image w="220px" className="main-logo" src={logo}></Image>
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <GiHamburgerMenu
          style={{ marginLeft: 10, fontSize: 28 }}
        ></GiHamburgerMenu>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        {/* <Text mt={{ base: 4, md: 0 }} ml={6} display="block" fontWeight="bold" fontSize="xl">
          <Link onClick={handleToggle} to="/home">
            الرئيسية
          </Link>
        </Text> */}
        <Menu>
          <MenuButton
            display="block"
            // px={4}
            // py={2}

            mt={{ base: 4, md: 0 }}
            ml={8}
            fontSize="xl"
            fontWeight="bold"
            transition="all 0.2s"
            // _hover={{ bg: 'gray.100' }}
            // _focus={{ outline: 0, boxShadow: 'outline' }}
          >
            كتب المتوسط
            <FaChevronUp style={{ display: 'inline' }}></FaChevronUp>{' '}
          </MenuButton>
          <MenuList w="100vw" bg={bg[colorMode]} shadow="xl">
            <SimpleGrid
              pl={['5%', '5%', '20%', '20%']}
              pr={['5%', '5%', '20%', '20%']}
              columns={3}
            >
              <Link
                style={{ margin: '50px !important' }}
                onClick={handleToggle}
                to="/publications/publish-list"
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
                to="/publications/distribution"
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
                to="/publications/publish-list"
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
                to="/publications/distribution"
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
                to="/publications/publish-list"
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
                to="/publications/distribution"
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
                to="/publications/publish-list"
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
                to="/publications/distribution"
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
                        وكلاء وموزعون
                      </Heading>
                    </Box>
                  </MenuItem>
                </Box>
              </Link>
              <Link
                style={{ margin: '50px !important' }}
                onClick={handleToggle}
                to="/publications/publish-list"
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
                to="/publications/distribution"
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

        <Menu>
          <MenuButton
            display="block"
            // px={4}
            // py={2}
            mt={{ base: 4, md: 0 }}
            ml={8}
            fontSize="xl"
            fontWeight="bold"
            transition="all 0.2s"
            // _hover={{ bg: 'gray.100' }}
            // _focus={{ outline: 0, boxShadow: 'outline' }}
          >
            كتّاب المتوسط
            <FaChevronUp style={{ display: 'inline' }}></FaChevronUp>{' '}
          </MenuButton>
          <MenuList bg={bg[colorMode]} shadow="xl">
            <Link onClick={handleToggle} to="/ourWriters/publishConditions">
              <MenuItem
                _focus={{ bg: 'white', color: 'black' }}
                _hover={{ bg: 'white', color: 'black' }}
                fontSize="xl"
              >
                <Box display="flex">
                  <Text> شروط النشر</Text>
                </Box>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            // px={4}
            // py={2}
            mt={{ base: 4, md: 0 }}
            ml={8}
            fontSize="xl"
            fontWeight="bold"
            transition="all 0.2s"
            // _hover={{ bg: 'gray.100' }}
            // _focus={{ outline: 0, boxShadow: 'outline' }}
          >
            مشاريعنا
            <FaChevronUp style={{ display: 'inline' }}></FaChevronUp>{' '}
          </MenuButton>
          <MenuList bg={bg[colorMode]} shadow="xl">
            <Link onClick={handleToggle} to="/ourProjects/divineComedy">
              <MenuItem
                _focus={{ bg: 'white', color: 'black' }}
                _hover={{ bg: 'white', color: 'black' }}
                fontSize="xl"
              >
                <Box display="flex">
                  <Text>الكوميديا الإلهية</Text>
                </Box>
              </MenuItem>
            </Link>
            <Link onClick={handleToggle} to="/ourProjects/translationForum">
              <MenuItem
                _focus={{ bg: 'white', color: 'black' }}
                _hover={{ bg: 'white', color: 'black' }}
                fontSize="xl"
              >
                <Box display="flex">
                  <Text>ملتقى الترجمة</Text>
                </Box>
              </MenuItem>
            </Link>
            <Link
              onClick={handleToggle}
              to="/ourProjects/arabCultureFestivalInMilan"
            >
              <MenuItem
                _focus={{ bg: 'white', color: 'black' }}
                _hover={{ bg: 'white', color: 'black' }}
                fontSize="xl"
              >
                <Box display="flex">
                  <Text>مهرجان الثقافة العربية في ميلانو</Text>
                </Box>
              </MenuItem>
            </Link>
            <Link onClick={handleToggle} to="/ourProjects/literatureIsStronger">
              <MenuItem
                _focus={{ bg: 'white', color: 'black' }}
                _hover={{ bg: 'white', color: 'black' }}
                fontSize="xl"
              >
                <Box display="flex">
                  <Text>الأدب أقوى</Text>
                </Box>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
        >
          <Link onClick={handleToggle} to="/blog">
            المدونة
          </Link>
        </Text>
        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
        >
          <Link onClick={handleToggle} to="/events">
            نشاطات
          </Link>
        </Text>
        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
        >
          <Link onClick={handleToggle} to="/inThePress">
            في الصحافة
          </Link>
        </Text>
        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
        >
          <Link onClick={handleToggle} to="/about">
            عن المتوسط
          </Link>
        </Text>
        <Register></Register>
        <Login></Login>

        {/* <ShopBadge></ShopBadge> */}
        <Box
          cursor="pointer"
          mr={['0', '0', '6', '6']}
          ml={['0', '0', '6', '6']}
          mt={['6', '6', '0', '0']}
          fontSize="24px"
          onClick={toggleColorMode}
        >
          {' '}
          {colorMode === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
        </Box>
      </Box>
    </Flex>
  );
}
