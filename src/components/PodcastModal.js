import {
  Box,
  Heading,
  Image,
  useDisclosure,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import {Link} from "react-router-dom";

export default function PodcastModal({ podcast }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();

  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };

  const bg = { light: 'white', dark: '#151a23' };

  return (
    <>
      <Link to={`/singlePodcast/${podcast.id}`}>
        <Box ref={btnRef} shadow="lg" bg={bg[colorMode]} onClick={onOpen}>
          {/*<Box ref={btnRef} shadow="lg" bg={bg[colorMode]} onClick={onOpen}>*/}
          <Box position="relative">
            <Image
                loading="lazy"
                onLoad={imageLoaded}
                src={`${process.env.REACT_APP_STORAGE}/${podcast.image}`}
            ></Image>
            {loaded && (
                <Box
                    position="absolute"
                    bottom="10px"
                    left="10px"
                    fontSize="70px"
                    color="#eee"
                >
                  <AiFillPlayCircle></AiFillPlayCircle>
                </Box>
            )}
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
      </Link>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay>
          <DrawerContent bg="black" color="white">
            <DrawerCloseButton />

            <DrawerBody>
              <Heading
                mt="100px"
                mr="10%"
                ml="10%"
                mb="4"
                fontFamily="diodrum-med !important"
                size="md"
              >
                {podcast.title}
              </Heading>
              <Box
                mr="10%"
                ml="10%"
                mb="4"
                className="event-body"
                dangerouslySetInnerHTML={{
                  __html: podcast.url,
                }}
              ></Box>
              <Box
                fontSize="xl"
                // className="event-body"
                mr="10%"
                ml="10%"
                mb="100px"
                dangerouslySetInnerHTML={{
                  __html: podcast.description,
                }}
              ></Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
