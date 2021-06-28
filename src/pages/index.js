// import React from 'react';
// import { Helmet } from 'react-helmet';

// import { Text, SimpleGrid, Flex, Image } from '@chakra-ui/core';
// import { connect } from 'react-redux';
// import { getImages } from '../redux/actions/indexActions';
// // import '../components/util/changeBg';

// import medium from '../images/logo.png';
// import center from '../images/center-main-logo.png';
// import shope from '../images/shop-logo.png';
// import braat from '../images/braat-logo.png';

// function Home({ getImages }) {
//   const [images, setImages] = React.useState();

//   React.useEffect(() => {
//     async function getData() {
//       const res = await getImages();
//       if (res?.status === 201) {
//         setImages(res.data.images);
//       }
//       //   console.log(res);
//     }
//     getData();
//   }, []);

//   React.useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     // const cats = [first, main2, main3];

//     const node = document.getElementById('image-head');

//     const cycleImages = async (images, container, step) => {
//       images.forEach((image, index) => {
//         console.log(image);
//         setTimeout(() => {
//           container.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.50)),url(${process.env.REACT_APP_STORAGE}/${image.image}) `;
//           //   container.style.transition = 'background-image 6s';
//         }, step * (index + 1));
//       });
//       setTimeout(
//         () => cycleImages(images, container, step),
//         step * images.length
//       );
//     };
//     if (images) {
//       cycleImages(images, node, 3000);
//     }

//     return () => {
//       document.body.style.overflow = 'none';
//     };
//   }, [images]);

//   return (
//     <SimpleGrid
//       transition="background-image 2s"
//       id="image-head"
//       color="white"
//       bg="black"
//       zIndex="9999"
//       position="absolute"
//       top="0"
//       width="100vw"
//       height="100vh"
//       columns={[1, 1, 2, 2]}
//       //   bgImage="url('/images/main.jpg')"
//       //   bgRepeat="no-repeat"
//       overflow="hidden"
//     >
//       <Helmet>
//         <title>رئيسية المتوسط</title>
//       </Helmet>
//       <a href="/home">
//         <Flex
//           className="main"
//           justifyContent="center"
//           //   onMouseEnter={() => setMain(true)}
//           //   onMouseLeave={() => setMain(false)}
//           cursor="pointer"
//           //   _hover={{ color: 'black', backgroundColor: 'white' }}
//           border="1px solid white"
//           w={['100vw', '100vw', '50vw', '50vw']}
//           h={['25vh', '25vh', '50vh', '50vh']}
//         >
//           <Flex>
//             <Flex
//               alignItems="center"
//               justifyContent="center"
//               direction="column"
//             >
//               <Image loading="lazy" w="70%" src={medium}></Image>
//               <Text mt="4" fontSize="2xl">
//                 معا لنحارب طواحين الهواء
//               </Text>
//             </Flex>
//           </Flex>
//         </Flex>
//       </a>{' '}
//       <a
//         href="http://motawasit-center.vercel.app
// "
//       >
//         <Flex
//           className="center"
//           justifyContent="center"
//           //   onMouseEnter={() => setCenter(true)}
//           //   onMouseLeave={() => setCenter(false)}
//           cursor="pointer"
//           //   _hover={{ color: 'black', backgroundColor: 'white' }}
//           border="1px solid white"
//           w={['100vw', '100vw', '50vw', '50vw']}
//           h={['25vh', '25vh', '50vh', '50vh']}
//         >
//           <Flex>
//             <Flex
//               alignItems="center"
//               justifyContent="center"
//               direction="column"
//             >
//               <Image loading="lazy" w="70%" src={center}></Image>
//               {/* <Text mt="4" fontSize="2xl">
//                 لشعر أكثر الأفعال حظاً من البراءة
//               </Text> */}
//             </Flex>
//           </Flex>
//         </Flex>
//       </a>
//       <a
//         href="http://motwasit-journal.vercel.app
// "
//       >
//         <Flex
//           className="journal"
//           justifyContent="center"
//           //   onMouseEnter={() => setJournal(true)}
//           //   onMouseLeave={() => setJournal(false)}
//           cursor="pointer"
//           //   _hover={{ color: 'black', backgroundColor: 'white' }}
//           border="1px solid white"
//           w={['100vw', '100vw', '50vw', '50vw']}
//           h={['25vh', '25vh', '50vh', '50vh']}
//         >
//           <Flex>
//             <Flex
//               alignItems="center"
//               justifyContent="center"
//               direction="column"
//             >
//               <Image loading="lazy" w="20%" src={braat}></Image>
//               <Text mt="4" fontSize="2xl">
//                 الشعر أكثر الأفعال حظاً من البراءة
//               </Text>
//             </Flex>
//           </Flex>
//         </Flex>
//       </a>
//       <a
//         href="http://motawasit-shop.vercel.app
// "
//       >
//         <Flex
//           className="shop"
//           justifyContent="center"
//           //   onMouseEnter={() => setShop(true)}
//           //   onMouseLeave={() => setShop(false)}
//           cursor="pointer"
//           //   _hover={{ color: 'black', backgroundColor: 'white' }}
//           border="1px solid white"
//           w={['100vw', '100vw', '50vw', '50vw']}
//           h={['25vh', '25vh', '50vh', '50vh']}
//         >
//           <Flex>
//             <Flex
//               alignItems="center"
//               justifyContent="center"
//               direction="column"
//             >
//               <Image loading="lazy" w="30%" src={shope}></Image>{' '}
//               <Text mt="4" fontSize="2xl">
//                 متجر الكتاب العربي في إيطاليا
//               </Text>
//             </Flex>
//           </Flex>
//         </Flex>
//       </a>
//     </SimpleGrid>
//   );
// }

// const mapDispatchToProps = dispatch => {
//   return { getImages: () => dispatch(getImages()) };
// };

// export default connect(null, mapDispatchToProps)(Home);
import React from 'react';
import { Helmet } from 'react-helmet';

import { Text, SimpleGrid, Flex, Image, Box } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { getImages } from '../redux/actions/indexActions';
// import '../components/util/changeBg';

import medium from '../images/logo.png';
import center from '../images/center-main-logo.png';
import shope from '../images/shop-logo.png';
import braat from '../images/braat-logo.png';

function Home({ getImages }) {
  const [images, setImages] = React.useState();

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    async function getData() {
      const res = await getImages();
      if (res?.status === 201) {
        setImages(res.data.images);
      }
      console.log(res);
    }
    getData();
    return () => {
      document.body.style.overflow = 'none';
    };
  }, []);

  return (
    <Box>
      <ul class="cb-slideshow">
        {images &&
          images.map((image, i) => (
            <li key={image.id}>
              <span
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_STORAGE}/${image.image})`,
                  animationDelay: `${i * 12}s`,
                }}
              ></span>
            </li>
          ))}
        {/* <li>
          <span>Image 02</span>
          <div>
            <h3>qui·e·tude</h3>
          </div>
        </li>
        <li>
          <span>Image 03</span>
          <div>
            <h3>bal·ance</h3>
          </div>
        </li>
        <li>
          <span>Image 04</span>
          <div>
            <h3>e·qua·nim·i·ty</h3>
          </div>
        </li>
        <li>
          <span>Image 05</span>
          <div>
            <h3>com·po·sure</h3>
          </div>
        </li>
        <li>
          <span>Image 06</span>
          <div>
            <h3>se·ren·i·ty</h3>
          </div>
        </li> */}
      </ul>
      <SimpleGrid
        // transition="background-image 2s"
        // id="image-head"
        color="white"
        // bg="black"
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
          <title>رئيسية المتوسط</title>
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
                <Image loading="lazy" w="70%" src={medium}></Image>
                <Text mt="4" fontSize="2xl">
                  معا لنحارب طواحين الهواء
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </a>{' '}
        <a
          href="https://misccenter.com/
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
                <Image loading="lazy" w="70%" src={center}></Image>
                {/* <Text mt="4" fontSize="2xl">
                لشعر أكثر الأفعال حظاً من البراءة
              </Text> */}
              </Flex>
            </Flex>
          </Flex>
        </a>
        <a
          href="https://www.baraat.it/
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
                <Image loading="lazy" w="20%" src={braat}></Image>
                <Text mt="4" fontSize="2xl">
                  الشعر أكثر الأفعال حظاً من البراءة
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </a>
        <a
          href="https://www.mutab.it/
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
                <Image loading="lazy" w="30%" src={shope}></Image>{' '}
                <Text mt="4" fontSize="2xl">
                  متجر الكتاب العربي في إيطاليا
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </a>
      </SimpleGrid>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getImages: () => dispatch(getImages()) };
};

export default connect(null, mapDispatchToProps)(Home);
