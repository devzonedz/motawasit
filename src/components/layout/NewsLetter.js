import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  useColorMode,
  Input,
  Text,
} from '@chakra-ui/core';
import { FaNewspaper } from 'react-icons/fa';

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#fff', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };
  return (
    <>
      <Box
        rounded="5px"
        onClick={onOpen}
        bg={bgIcon[colorMode]}
        color={color[colorMode]}
        m="3px"
        p="10px"
        fontSize="28px"
      >
        <FaNewspaper></FaNewspaper>
      </Box>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          {/* <ModalHeader>
            ابق على اطلاع دائم مع المتوسط من خلال الاشتراك في النشرة الإخبارية
          </ModalHeader> */}
          <ModalCloseButton
            position="absolute"
            top="10px"
            left="10px"
            right="none"
          />
          <ModalBody mt="50px">
            <Box textAlign="center">
              <Text mb="4" fontSize="2xl">
                ابق على اطلاع دائم مع المتوسط من خلال الاشتراك في النشرة
                الإخبارية
              </Text>
            </Box>
            <Input mb="4" placeholder="بريدك الالكتروني"></Input>
            <Button colorScheme="teal" mb="8" w="100%">
              سجل
            </Button>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
