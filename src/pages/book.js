import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  Flex,
  Skeleton,
  Spinner,
  AspectRatio,
  useColorMode,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/core';
import Carousel from 'react-elastic-carousel';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { getBook } from '../redux/actions/booksActions';

import GlobalShare from '../util/GlobalShare';

function Book({ getBook }) {
  const { colorMode } = useColorMode();
  const breakPointMd = useBreakpointValue({ base: false, md: true });

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const color = { light: 'black', dark: 'white' };

  let { id } = useParams();
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  React.useEffect(() => {
    async function getData() {
      const res = await getBook(id);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [id]);

  console.log(data);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1900, itemsToShow: 4 },
  ];
  const bookBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];
  return (
    <Box mt={{ base: '2em', md: '6em' }}>
      <Box mb="2em">
        {!data && (
          <Box textAlign="center">
            <Spinner size="xl" />
          </Box>
        )}
        {data && (
          <>
            <Helmet>
              <title>{data.title}</title>
            </Helmet>
            <Flex
              direction={['column', 'column', 'column', 'row']}
              px={['2%', '2%', '5%', '5%']}
              gap="10px"
            >
              <Box w={{ base: '100%', lg: '30%' }} maxW="400px" mx="auto">
                <Box>
                  <Skeleton isLoaded={loaded}>
                    <Image
                      loading="lazy"
                      onLoad={imageLoaded}
                      shadow="lg"
                      mx="auto"
                      src={`${process.env.REACT_APP_STORAGE}/${data.cover}`}
                    />
                  </Skeleton>
                </Box>
                <Flex direction="column" align="center" py="1.5em">
                  <a
                    target="_blank"
                    href={`${process.env.REACT_APP_SHOP}/book/${data.id}`}
                    style={{ width: '100%' }}
                  >
                    <Button
                      rounded="20px"
                      mt="4"
                      w="100%"
                      colorScheme="red"
                      fontFamily="diodrum-med !important"
                    >
                      لشراء الكتاب المس هنا
                    </Button>
                  </a>
                  <Box mt="4" w="90%">
                    <GlobalShare />
                  </Box>
                  <Box w={['300px', '300px', '400px', '400px']}>
                    {data.podcast && (
                      <Box>
                        <iframe
                          title={data.title}
                          width="100%"
                          height="100"
                          scrolling="no"
                          frameBorder="no"
                          allow="autoplay"
                          src={data.podcast}
                        ></iframe>
                      </Box>
                    )}
                    {data.video && (
                      <AspectRatio ratio={1}>
                        <Box
                          fontSize="2xl"
                          className="content"
                          dangerouslySetInnerHTML={{ __html: data.video }}
                        ></Box>
                      </AspectRatio>
                    )}
                  </Box>
                </Flex>
              </Box>
              <Box
                w={{ base: '100%', lg: '70%' }}
                mr={{ base: '0', lg: '1.5em' }}
                p="1em"
              >
                <Box>
                  <Heading fontFamily="diodrum-med !important" mb="4">
                    {data.title}
                  </Heading>
                  <Divider />
                  <Text fontFamily="diodrum-med !important" fontSize="2xl">
                    {data.sub_title}
                  </Text>
                  {data.author && data.author.map(author => (
                    <Box key={author.id} d="inline-block" ml="1em">
                      <Link key={author.id} to={`/author/${author.id}`}>
                        <Text
                          _hover={{
                            bg: 'black',
                            color: 'white',
                            textDecoration: 'underline',
                          }}
                          mt="2"
                          fontSize="2xl"
                          color="gray.500"
                        >
                          {author.name}
                        </Text>
                      </Link>
                    </Box>
                  ))}
                  <Divider />
                  {data.translate_from && (
                    <Text mt="2" fontSize="2xl">
                      ترجم عن : {data.translate_from}
                    </Text>
                  )}
                  <Box
                    my="4"
                    fontSize="2xl"
                    className="content"
                    dangerouslySetInnerHTML={{ __html: data.overview }}
                  />
                  <Divider />
                </Box>
                {breakPointMd && (
                  <Tabs>
                    <TabList className="booktablist">
                      {data.description && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          عن الكتاب
                        </Tab>
                      )}
                      {data.author && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          عن المؤلف
                        </Tab>
                      )}
                      {data.index && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          فهرس الكتاب
                        </Tab>
                      )}
                      {data.from_book && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          من الكتاب
                        </Tab>
                      )}
                      {data.press_external_link && (
                        <Tab whiteSpace="nowrap" fontSize="18px">
                          في الصحافة
                        </Tab>
                      )}
                      <Tab whiteSpace="nowrap" fontSize="18px">
                        معلومات الكتاب
                      </Tab>
                    </TabList>

                    <TabPanels>
                      {data.description && (
                        <TabPanel>
                          <Box
                            fontSize="2xl"
                            className="content"
                            style={{ WebkitUserSelect: 'none' }}
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />
                        </TabPanel>
                      )}
                      {data.author && (
                        <TabPanel>
                          {data.author.map(author => (
                            <Box key={author.id}>
                              <Heading size="lg">{author.name}</Heading>
                              <Box
                                fontSize="2xl"
                                className="content"
                                style={{ WebkitUserSelect: 'none' }}
                                dangerouslySetInnerHTML={{ __html: author.author_bio }}
                              ></Box>
                            </Box>
                          ))}
                        </TabPanel>
                      )}
                      {data.index && (
                        <TabPanel fontSize="xl">
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{ __html: data.index }}
                          />
                        </TabPanel>
                      )}
                      {data.from_book && (
                        <TabPanel fontSize="xl">
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.from_book,
                            }}
                          />
                        </TabPanel>
                      )}
                      {data.press_external_link && (
                        <TabPanel>
                          <Box
                            fontSize="xl"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.press_external_link,
                            }}
                          />
                        </TabPanel>
                      )}
                      <TabPanel fontSize="xl">
                        <List mt="4">
                          <ListItem>الناشر : {data.publisher}</ListItem>
                          <ListItem>
                            عدد الصفحات :{' '}
                            <Text as="span" color="green.600" fontWeight="bold">
                              {data.pages}
                            </Text>
                          </ListItem>
                          <ListItem>
                            النوع :{' '}
                            <Text as="span" color="green.600" fontWeight="bold">
                              {data.type}
                            </Text>
                          </ListItem>
                          <ListItem>ISBN : {data.isbn}</ListItem>
                          <ListItem>
                            تاريخ الإصدار : {moment(data.date).format('LL')}
                          </ListItem>
                          <ListItem>
                            ردمك : {data.rdmk ? data.rdmk : 'غير متوفر'}
                          </ListItem>
                        </List>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                )}
                <Accordion my="2em" display={!breakPointMd && 'block'}>
                  {data.description && (
                    <AccordionItem>
                      <AccordionButton>
                        <Box
                          fontSize="18px"
                          flex="1"
                          textAlign="right"
                          fontWeight="bold"
                        >
                          عن الكتاب
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="2xl"
                          className="content"
                          style={{ WebkitUserSelect: 'none' }}
                          dangerouslySetInnerHTML={{
                            __html: data.description,
                          }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.author && (
                    <AccordionItem>
                      <AccordionButton>
                        <Box
                          fontSize="18px"
                          flex="1"
                          textAlign="right"
                          fontWeight="bold"
                        >
                          عن المؤلف
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {data.author.map(author => (
                          <Box key={author.id}>
                            <Heading size="lg">{author.name}</Heading>
                            <Box
                              fontSize="2xl"
                              className="content"
                              style={{ WebkitUserSelect: 'none' }}
                              dangerouslySetInnerHTML={{ __html: author.author_bio }}
                            ></Box>
                          </Box>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.index && (
                    <AccordionItem>
                      <AccordionButton>
                        <Box
                          fontSize="18px"
                          flex="1"
                          textAlign="right"
                          fontWeight="bold"
                        >
                          فهرس الكتاب
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{ __html: data.index }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.from_book && (
                    <AccordionItem>
                      <AccordionButton>
                        <Box
                          fontSize="18px"
                          flex="1"
                          textAlign="right"
                          fontWeight="bold"
                        >
                          من الكتاب
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: data.from_book,
                          }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.press_external_link && (
                    <AccordionItem>
                      <AccordionButton>
                        <Box
                          fontSize="18px"
                          flex="1"
                          textAlign="right"
                          fontWeight="bold"
                        >
                          في الصحافة
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: data.press_external_link,
                          }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  <AccordionItem>
                    <AccordionButton>
                      <Box
                        fontSize="18px"
                        flex="1"
                        textAlign="right"
                        fontWeight="bold"
                      >
                        معلومات الكتاب
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List mt="4">
                        <ListItem>الناشر : {data.publisher}</ListItem>
                        <ListItem>
                          عدد الصفحات :{' '}
                          <Text as="span" color="green.600" fontWeight="bold">
                            {data.pages}
                          </Text>
                        </ListItem>
                        <ListItem>
                          النوع :{' '}
                          <Text as="span" color="green.600" fontWeight="bold">
                            {data.type}
                          </Text>
                        </ListItem>
                        <ListItem>ISBN : {data.isbn}</ListItem>
                        <ListItem>
                          تاريخ الإصدار : {moment(data.date).format('LL')}
                        </ListItem>
                        <ListItem>
                          ردمك : {data.rdmk ? data.rdmk : 'غير متوفر'}
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                {data.books && data.books.length > 0 && (
                  <Box my="2em">
                    <Heading mb="4" size="lg">
                      كتب أخرى
                    </Heading>
                    <Carousel
                      showArrows={false}
                      breakPoints={bookBreakPoints}
                      isRTL
                      pagination={false}
                    >
                      {data.books.map(book => (
                        <Link key={book.id} to={`/book/${book.id}`}>
                          <Box
                            w="200px"
                            textAlign="center"
                            shadow="lg"
                            p="1em"
                            bg="white"
                            color="black"
                          >
                            <Image
                              h="250px"
                              mx="auto"
                              src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                            />
                            <Text>{book.title}</Text>
                          </Box>
                        </Link>
                      ))}
                    </Carousel>
                  </Box>
                )}
                {data.articles && data.articles.length > 0 && (
                  <Box my="2em">
                    <Heading mb="4" size="lg">
                      مقالات ذات صلة
                    </Heading>
                    <Carousel showArrows={false} breakPoints={breakPoints} isRTL>
                      {data.articles.map(article => (
                        <Link key={article.id} to={`/article/${article.id}`}>
                          <Box
                            h="350px"
                            w="300px"
                            shadow="lg"
                            p="1em"
                            bg="white"
                            color="black"
                          >
                            <Image
                              h="150px"
                              w="100%"
                              mx="auto"
                              src={`${process.env.REACT_APP_STORAGE}/${article.cover}`}
                            />
                            <Text>{article.title}</Text>
                          </Box>
                        </Link>
                      ))}
                    </Carousel>
                  </Box>
                )}
              </Box>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
}

export default connect(null, { getBook })(Book);
