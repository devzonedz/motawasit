import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaSoundcloud,
  FaYoutube,
} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

import { Link } from 'react-router-dom';

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
        <Link
          //   className="social-href "
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="facebook"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <FaFacebook></FaFacebook>
          </Box>
        </Link>
        <Link
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="twitter"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <FaTwitter></FaTwitter>
          </Box>
        </Link>
        <Link
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="linkedin"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <FaLinkedin></FaLinkedin>
          </Box>
        </Link>

        <Link
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <IoLogoWhatsapp></IoLogoWhatsapp>
          </Box>
        </Link>
        <Link
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <FaPinterest></FaPinterest>
          </Box>
        </Link>
        <Link
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <FaYoutube></FaYoutube>
          </Box>
        </Link>
        <Link
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="18px"
          >
            <FaSoundcloud></FaSoundcloud>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
}
