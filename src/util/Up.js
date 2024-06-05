import React from 'react';
// import { ArrowUpIcon } from '@chakra-ui/icons';
import { animateScroll as scroll } from 'react-scroll';

import { FaChevronUp } from 'react-icons/fa';
import { Box, useBreakpointValue } from '@chakra-ui/core';
import Headroom from 'react-headroom';

export default function Up() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isSmallScreen && (
        <Headroom
          className="scroll-top"
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: '90',
            width: '45px',
            height: '45px',
            transform: 'translate3d(0px, 0px, 0px)',
            transition: 'all .5s ease-in-out 0s',
            top: 'unset',
            bottom: '60px',
            left: '20px',
            right: 'unset',
          }}
        >
          <Box
            style={{
              backgroundColor: '#151a23',
              borderRadius: '50%',
              padding: 10,
              cursor: 'pointer',
            }}
          >
            <FaChevronUp onClick={scrollToTop} fontSize="24px" color="white" />
          </Box>
        </Headroom>
      )}
      {!isSmallScreen && (
        <Box
          style={{
            backgroundColor: '#151a23',
            borderRadius: '50%',
            position: 'fixed',
            bottom: 80,
            left: 20,
            zIndex: 997,
            padding: 10,
            cursor: 'pointer',
          }}
          mr="auto"
        >
          <FaChevronUp onClick={scrollToTop} fontSize="24px" color="white" />
        </Box>
      )}
    </>
  );
}
