import {
  Box,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function PodcastModal({ podcast }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };

  return (
    <>
      <Box shadow="lg" bg={bg[colorMode]} onClick={onOpen}>
        <Box position="relative">
          <Image
            loading="lazy"
            src={`${process.env.REACT_APP_STORAGE}/${podcast.cover}`}
          ></Image>
          <Box
            position="absolute"
            bottom="10px"
            left="10px"
            fontSize="70px"
            color="#eee"
          >
            <AiFillPlayCircle></AiFillPlayCircle>
          </Box>
        </Box>
        <Box p="4">
          <Heading fontFamily="diodrum-med !important" size="md" mb="2">
            {podcast.title}
          </Heading>
          <Box
            fontSize="xl"
            className="event-body"
            dangerouslySetInnerHTML={{
              __html: podcast.description,
            }}
          ></Box>
        </Box>
      </Box>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent shadow="none" bg="transparent">
          <ModalCloseButton
            position="absolute"
            top="10px"
            left="10px"
            right="none"
          />
          {/* <ModalBody>

          </ModalBody> */}
          <Box d="flex" justifyContent="center" m="100px">
            <iframe
              title={podcast.title}
              width="100%"
              height="100"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={podcast.podcast}
            ></iframe>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
