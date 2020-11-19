import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/core';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share';

export default function SocialButtons() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#fff', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };
  return (
    <Box style={{ position: 'fixed', zIndex: '99', top: '30%', right: 0 }}>
      <Flex direction="column">
        <FacebookShareButton
          //   className="social-href "
          style={{ backgroundColor: bgIcon[colorMode] }}
          url="https://www.tutorialrepublic.com/faq/how-to-get-the-current-url-with-javascript.php"
        >
          <Box
            className="facebook"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="24px"
          >
            <FaFacebook></FaFacebook>
          </Box>
        </FacebookShareButton>
        <TwitterShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url="https://www.tutorialrepublic.com/faq/how-to-get-the-current-url-with-javascript.php"
        >
          <Box
            className="twitter"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="28px"
          >
            <FaTwitter></FaTwitter>
          </Box>
        </TwitterShareButton>
        <LinkedinShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url="https://www.tutorialrepublic.com/faq/how-to-get-the-current-url-with-javascript.php"
        >
          <Box
            className="linkedin"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="28px"
          >
            <FaLinkedin></FaLinkedin>
          </Box>
        </LinkedinShareButton>

        <WhatsappShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url="https://www.tutorialrepublic.com/faq/how-to-get-the-current-url-with-javascript.php"
        >
          <Box
            className="whatsapp"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            p="20px"
            fontSize="28px"
          >
            <IoLogoWhatsapp></IoLogoWhatsapp>
          </Box>
        </WhatsappShareButton>
      </Flex>
    </Box>
  );
}
