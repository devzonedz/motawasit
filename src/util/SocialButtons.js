import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaSoundcloud,
  FaYoutube,
  FaInstagram, FaGoodreads,
} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function SocialButtons() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#fff', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      style={{ position: 'fixed', zIndex: '99', top: '25%', right: 0 }}
    >
      <Flex direction="column">

        <a
            href="https://www.goodreads.com/user/show/50160397"
            //   className="social-href "
            target="_blank"
            style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
              className="facebook"
              bg={bgIcon[colorMode]}
              color={color[colorMode]}
              p="15px"
              fontSize="18px"
          >
            <FaGoodreads></FaGoodreads>
          </Box>
        </a>


        <a
          href="https://www.facebook.com/almutawassit"
          target="_blank"
          //   className="social-href "
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="facebook"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaFacebook></FaFacebook>
          </Box>
        </a>
        <a
          href="https://twitter.com/Almutawassitit"
          //   className="social-href"
          target="_blank"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="twitter"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaTwitter></FaTwitter>
          </Box>
        </a>
        <a
          href="https://www.instagram.com/Almutawassit_books/"
          //   className="social-href"
          target="_blank"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="twitter"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaInstagram></FaInstagram>
          </Box>
        </a>
        {/* <a
          to="#"
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="aedin"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaLinkedin></FaLinkedin>
          </Box>
        </a> */}

        {/* <a
          to="#"
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <IoLogoWhatsapp></IoLogoWhatsapp>
          </Box>
        </a> */}
        <a
          to="https://www.pinterest.it/almutawassit/"
          //   className="social-href"
          target="_blank"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaPinterest></FaPinterest>
          </Box>
        </a>
        <a
          href="https://www.youtube.com/channel/UCSBUh4FMxnG9Wmjio_tJk1w"
          //   className="social-href"
          target="_blank"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaYoutube></FaYoutube>
          </Box>
        </a>
        <a
          to="#"
          target="_blank"
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="15px"
            fontSize="18px"
          >
            <FaSoundcloud></FaSoundcloud>
          </Box>
        </a>
      </Flex>
    </Box>
  );
}
