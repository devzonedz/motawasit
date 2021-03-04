import React from 'react';
import { Helmet } from 'react-helmet';

import { Text, SimpleGrid, Flex, Image } from '@chakra-ui/core';
// import '../components/util/changeBg';
import first from '../images/main.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';
import medium from '../images/logo.png';
import center from '../images/center-main-logo.png';
import shope from '../images/shop-logo.png';
import braat from '../images/braat-logo.png';

export default function Home() {
  //   const [main, setMain] = React.useState(false);
  //   const [shop, setShop] = React.useState(false);
  //   const [center, setCenter] = React.useState(false);
  //   const [journal, setJournal] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    const cats = [first, main2, main3];

    const node = document.getElementById('image-head');

    const cycleImages = (images, container, step) => {
      images.forEach((image, index) =>
        setTimeout(() => {
          container.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.50)),url(${image}) `;
          //   container.style.transition = 'background-image 6s';
        }, step * (index + 1))
      );
      setTimeout(
        () => cycleImages(images, container, step),
        step * images.length
      );
    };
    cycleImages(cats, node, 3000);
    return () => {
      document.body.style.overflow = 'none';
    };
  }, []);

  return (
    <SimpleGrid
      transition="background-image 2s"
      id="image-head"
      color="white"
      bg="black"
      zIndex="9999"
      position="absolute"
      top="0"
      width="100vw"
      height="100vh"
      columns={[1, 1, 2, 2]}
      //   bgImage="url('/images/main.jpg')"
      //   bgRepeat="no-repeat"
      overflow="hidden"
    >
      <Helmet>
        <title>index</title>
      </Helmet>
      <a href="/home">
        <Flex
          className="main"
          justifyContent="center"
          //   onMouseEnter={() => setMain(true)}
          //   onMouseLeave={() => setMain(false)}
          cursor="pointer"
          //   _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Image w="70%" src={medium}></Image>
              <Text mt="4" fontSize="2xl">
                معا لنحارب طواحين الهواء
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </a>{' '}
      <a
        href="http://motawasit-center.vercel.app
"
      >
        <Flex
          className="center"
          justifyContent="center"
          //   onMouseEnter={() => setCenter(true)}
          //   onMouseLeave={() => setCenter(false)}
          cursor="pointer"
          //   _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Image w="70%" src={center}></Image>
              {/* <Text mt="4" fontSize="2xl">
                لشعر أكثر الأفعال حظاً من البراءة
              </Text> */}
            </Flex>
          </Flex>
        </Flex>
      </a>
      <a
        href="http://motwasit-journal.vercel.app
"
      >
        <Flex
          className="journal"
          justifyContent="center"
          //   onMouseEnter={() => setJournal(true)}
          //   onMouseLeave={() => setJournal(false)}
          cursor="pointer"
          //   _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Image w="20%" src={braat}></Image>
              <Text mt="4" fontSize="2xl">
                الشعر أكثر الأفعال حظاً من البراءة
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </a>
      <a
        href="http://motawasit-shop.vercel.app
"
      >
        <Flex
          className="shop"
          justifyContent="center"
          //   onMouseEnter={() => setShop(true)}
          //   onMouseLeave={() => setShop(false)}
          cursor="pointer"
          //   _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Image w="30%" src={shope}></Image>{' '}
              <Text mt="4" fontSize="2xl">
                متجر الكتاب العربي في إيطاليا
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </a>
    </SimpleGrid>
  );
}
