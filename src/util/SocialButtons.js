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

import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share';

export default function SocialButtons() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [url, setUrl] = React.useState();
  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const bg = { light: '#fff', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };
  return (
    <Box style={{ position: 'fixed', zIndex: '99', top: '23%', right: 0 }}>
      <Flex direction="column">
        <FacebookShareButton
          //   className="social-href "
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </FacebookShareButton>
        <TwitterShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </TwitterShareButton>
        <LinkedinShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </LinkedinShareButton>

        <WhatsappShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </WhatsappShareButton>
        <PinterestShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </PinterestShareButton>
        <PinterestShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </PinterestShareButton>
        <PinterestShareButton
          //   className="social-href"
          style={{ backgroundColor: bgIcon[colorMode] }}
          url={url}
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
        </PinterestShareButton>
      </Flex>
    </Box>
  );
}
