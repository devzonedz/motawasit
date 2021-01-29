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

export default function PodcastModal({ podcast }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };

  return (
    <>
      <Box shadow="lg" bg={bg[colorMode]} onClick={onOpen}>
        <Image
          src={`${process.env.REACT_APP_STORAGE}/${podcast.image}`}
        ></Image>
        <Box p="4">
          <Heading mt="4" fontFamily="diodrum-med !important" size="md" mb="4">
            {podcast.title}
          </Heading>
          <Box
            className="event-body"
            dangerouslySetInnerHTML={{
              __html: podcast.body,
            }}
          ></Box>
        </Box>
        {/* <iframe
                    title={data.title}
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={podcast}
                  ></iframe> */}
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
          <Box d="flex" justifyContent="center" m="100px">
            <iframe
              title={podcast.title}
              width="100%"
              height="100"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={podcast.soundcloud_link}
            ></iframe>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
