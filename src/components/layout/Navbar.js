import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Image,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronUp } from 'react-icons/fa';

// import Up from '../../util/Up';

import logo from '../../images/logo.png';

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#000000', dark: '#1a202c' };
  const color = { light: 'white', dark: 'white' };

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
        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/books">
            كتب المتوسط
          </Link>
        </Text>
        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/ourWriters/writers">
            كتّاب المتوسط
          </Link>
        </Text>

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
            fontFamily="diodrum-bold !important"
          >
            مشاريعنا
            <FaChevronUp
              className="project-chevron"
              style={{
                display: 'inline',
                marginRight: 3,
                marginTop: 5,
              }}
            ></FaChevronUp>{' '}
          </MenuButton>
          <MenuList w="100vw" bg={bg[colorMode]} shadow="xl">
            {/* <SimpleGrid pl="5%" pr="5%" columns={4}> */}
            <Flex
              alignItems="center"
              p="4"
              h="400px"
              flexWrap="wrap"
              direction="column"
            >
              <Link onClick={handleToggle} to="/ourProjects/divineComedy">
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-bold !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      الكوميديا الإلهية
                    </Heading>
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
                    <Heading
                      fontFamily="diodrum-bold !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      ملتقى الترجمة
                    </Heading>
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
                    <Heading
                      fontFamily="diodrum-bold !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      مهرجان الثقافة العربية في ميلانو
                    </Heading>
                  </Box>
                </MenuItem>
              </Link>
              <Link
                onClick={handleToggle}
                to="/ourProjects/literatureIsStronger"
              >
                <MenuItem
                  _focus={{ bg: 'white', color: 'black' }}
                  _hover={{ bg: 'white', color: 'black' }}
                  fontSize="xl"
                >
                  <Box display="flex">
                    <Heading
                      fontFamily="diodrum-bold !important"
                      fontSize={['lg', 'lg', '2xl', '2xl']}
                    >
                      {' '}
                      الأدب أقوى
                    </Heading>
                  </Box>
                </MenuItem>
              </Link>
            </Flex>
            {/* </SimpleGrid> */}
          </MenuList>
        </Menu>

        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
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
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/events">
            نشاطات
          </Link>
        </Text>
        {/* <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
        >
          <Link onClick={handleToggle} to="/inThePress">
            في الصحافة
          </Link>
        </Text> */}
        <Text
          fontFamily="diodrum-bold !important"
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="18px"
        >
          <Link onClick={handleToggle} to="/podcast">
            بودكاست
          </Link>
        </Text>
        <Text
          fontFamily="diodrum-bold !important"
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="18px"
        >
          <Link onClick={handleToggle} to="/videos">
            فيديو
          </Link>
        </Text>

        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/about">
            عن المتوسط
          </Link>
        </Text>
        <Text
          mt={{ base: 4, md: 0 }}
          ml={6}
          display="block"
          fontWeight="bold"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/ourWriters/publishConditions">
            أنشر معنا
          </Link>
        </Text>

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
        {/* <Up></Up> */}
      </Box>
    </Flex>
  );
}
