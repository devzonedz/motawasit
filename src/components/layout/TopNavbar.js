import React from 'react';

import {
  Box,
  Flex,
  Badge,
  Text,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

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
import Newsletter from './NewsLetter';

function ShopBadge(props) {
  return (
    <Link href="/cart">
      <Box cursor="pointer" mt={{ base: '15px', md: '0' }} display="flex">
        <Badge rounded="20px" fontSize="18px" ml="1" colorScheme="green">
          5
        </Badge>
        <FaShoppingCart fontSize="28px"></FaShoppingCart>
      </Box>
    </Link>
  );
}

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#fff', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };

  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: 0 }}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      //   shadow="lg"
      color={color[colorMode]}
      bg={bg[colorMode]}
      {...props}
    >
      <Box
        ml="8%"
        // display={{ base: show ? 'block' : 'none', md: 'flex' }}
        d="flex"
        // width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <Box fontSize="18px">
          {/* <FaSearch onClick={onOpen}></FaSearch> */}
          <Box
            rounded="5px"
            onClick={onOpen}
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            fontSize="28px"
          >
            <FaSearch></FaSearch>
          </Box>
          <Drawer
            placement="bottom"
            onClose={onClose}
            isOpen={isOpen}
            size="xl"
          >
            <DrawerOverlay>
              <DrawerContent bg="black" color="white">
                <DrawerCloseButton
                  position="absolute"
                  top="10px"
                  left="10px"
                  right="none"
                />

                <DrawerHeader>بحث</DrawerHeader>
                <DrawerBody>
                  <Input
                    color="black"
                    placeholder=" ابحث عن الكتب او المقالات ..."
                  ></Input>
                  <Box h="400px">
                    <Text>هنا ستكون نتيجة البحث</Text>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
        <Box
          rounded="5px"
          bg={bgIcon[colorMode]}
          color={color[colorMode]}
          m="3px"
          p="10px"
          fontSize="28px"
        >
          <FaShoppingCart></FaShoppingCart>
        </Box>
        <Newsletter></Newsletter>
        <Box
          rounded="5px"
          bg={bgIcon[colorMode]}
          color={color[colorMode]}
          m="3px"
          p="10px"
          fontSize="28px"
        >
          <FaDollarSign></FaDollarSign>
        </Box>
      </Box>
    </Flex>
  );
}
