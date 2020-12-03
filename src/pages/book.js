import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/core';
import Carousel from 'react-elastic-carousel';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { getBook } from '../redux/actions/booksActions';

import GlobalShare from '../util/GlobalShare';

function Book({ getBook }) {
  let { id } = useParams();
  console.log(id);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getBook(id);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);
  return (
    <Box mt="100px">
      <Box mt="100px">
        <Grid
          pr={['2%', '2%', '7%', '7%']}
          pl={['2%', '2%', '7%', '7%']}
          templateColumns={['1fr', '1fr', '0.5fr 2fr', '0.5fr 2fr']}
          gap="10px"
        >
          {data && (
            <>
              <Box m="4">
                <Image
                  shadow="lg"
                  w={['300px', '300px', '400px', '400px']}
                  src={`${process.env.REACT_APP_STORAGE}/${data.cover}`}
                ></Image>
                <Link>
                  <Button
                    rounded="20px"
                    mt="4"
                    w={['300px', '300px', '400px', '400px']}
                    colorScheme="red"
                  >
                    لشراء الكتاب إلمس هنا
                  </Button>
                </Link>
                <Box mt="4" w={['300px', '300px', '400px', '400px']}>
                  <GlobalShare></GlobalShare>
                </Box>
                <Box w={['300px', '300px', '400px', '400px']}>
                  {data.podcast && (
                    <iframe
                      title={data.title}
                      width="100%"
                      height="100"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={data.podcast}
                    ></iframe>
                  )}
                </Box>
              </Box>
              <Box m="4">
                <Heading m="4">{data.title}</Heading>
                <Divider></Divider>
                <Text fontSize="xl">{data.sub_title}</Text>
                <Divider></Divider>
                <Flex>
                  {data.author.map(author => (
                    <Link key={author.id} to={`/author/${author.id}`}>
                      <Text
                        _hover={{
                          bg: 'yellow.300',
                          color: 'black',
                          textDecoration: 'underline',
                        }}
                        m="2"
                        fontSize="2xl"
                        color="gray.500"
                      >
                        {author.name}
                      </Text>
                    </Link>
                  ))}
                </Flex>
                <Divider></Divider>
                <Text m="4" fontSize="xl">
                  {data.overview}
                </Text>
                <Divider></Divider>
                <Tabs>
                  <TabList>
                    <Tab fontSize="18px"> عن الكتاب</Tab>
                    <Tab fontSize="18px">عن المؤلف</Tab>
                    <Tab fontSize="18px"> فهرس الكتاب</Tab>
                    <Tab fontSize="18px"> من الكتاب</Tab>
                    <Tab fontSize="18px"> في الصحافة</Tab>
                    <Tab fontSize="18px">معلومات الكتاب</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Text fontSize="xl" mt="4">
                        {data.description}
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      {data.author.map(author => (
                        <Box>
                          <Heading size="lg">{author.name}</Heading>
                          <Text m="2" fontSize="2xl">
                            {author.author_bio}
                          </Text>
                        </Box>
                      ))}
                    </TabPanel>
                    <TabPanel fontSize="xl">
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: data.index }}
                      ></div>
                    </TabPanel>
                    <TabPanel fontSize="xl">
                      <Heading>from book</Heading>
                    </TabPanel>
                    <TabPanel>
                      <Text fontSize="xl" mt="4">
                        "إسرائيل في إفريقيا مثيرة للاهتمام وغنية بالمعلومات
                        ومكتوبة جيدًا وتستند إلى مجموعة واسعة بشكل مثير للإعجاب
                        من المصادر ، تقدم إسرائيل في إفريقيا تحليلًا أصليًا
                        ومحفزًا للفكر وإبداعًا لعلاقات إسرائيل المتطورة مع الدول
                        الأفريقية. سوف يترك العديد من قرائه غاضبين أو متفاجئين ،
                        ولكن بالتأكيد ، مع رؤى أصلية وحث قوي على استكشاف هذا
                        الموضوع بشكل أكبر. غاليا صبار ، مركز روبين الأكاديمي
                      </Text>
                      <Text fontSize="xl">
                        إن إسرائيل تعود إلى إفريقيا بطريقة مهمة ، وسياسة
                        إسرائيلية نشطة تجاه إفريقيا آخذة في الظهور ، وتبحث عن
                        حلفاء جدد ، وفرص تجارية جديدة وتعاونات أمنية جديدة. يقدم
                        كتاب يوتام جيدرون وصفًا دقيقًا لهذه التطورات ، ووضعها في
                        سياقها في كل من التاريخ والسياسة الإسرائيلية المعاصرة.
                        مساهمة كبيرة في موضوع تم التغاضي عنه. إيان تايلور ،
                        جامعة سانت أندروز
                      </Text>
                      <Text fontSize="xl">
                        دراسة علمية بارزة عن بُعد مهمل لنهج إسرائيل في العلاقات
                        خارج الشرق الأوسط. تسلط هذه الدراسة الضوء بشكل رسمي على
                        السياق المتطور والطابع المعقد لانخراط إسرائيل مع
                        إفريقيا. محتوياته موثقة جيدًا ، ومتوازنة سياسيًا ،
                        ومكتوبة بوضوح ، ومحللة بوضوح. ريتشارد فولك ، المقرر
                        الخاص السابق للأمم المتحدة المعني بحالة حقوق الإنسان في
                        الأراضي الفلسطينية المحتلة منذ عام 1967
                      </Text>
                      <Text fontSize="xl">
                        يروي هذا الكتاب الجذاب قصة مهمة ، ولكن لا يزال يساء
                        فهمها ، عن تورط إسرائيل في إفريقيا على مدى العقود
                        الماضية. من الدفاع والصناعات الاستخراجية إلى الهجرة ،
                        بالإضافة إلى الطريقة التي يلعب بها الصراع الدبلوماسي على
                        فلسطين والتنافس في كل مكان مع إيران في القارة ، إسرائيل
                        في رؤى إفريقيا تستحق قراءًا واسعًا. ريكاردو سواريس دي
                        أوليفيرا ، جامعة أكسفورد
                      </Text>
                      <Text fontSize="xl">
                        قصة تحالفات إسرائيل الجديدة في القارة الأفريقية غير
                        مروية إلى حد كبير. يقدم لنا جيدرون خدمة بجعلهم موضوع
                        كتابه. تأخذ إسرائيل في إفريقيا مكانها في موجة جديدة من
                        المنح الدراسية التي لا غنى عنها لتقييم مكانة الدول
                        الأفريقية سريعة التغير في العلاقات الدولية. جوني
                        شتاينبرغ ، جامعة أكسفورد
                      </Text>
                    </TabPanel>
                    <TabPanel fontSize="xl">
                      <List mt="4">
                        <ListItem>الناشر: {data.publisher} </ListItem>
                        <ListItem>
                          تاريخ النشر:{' '}
                          {moment(data.publish_date).format('DD/MM/yyyy')}{' '}
                        </ListItem>
                        <ListItem>عدد الصفحات: {data.page_number} </ListItem>
                        <ListItem dir="ltr"> {data.isbn} : ISBN </ListItem>
                        <ListItem>السعر: {data.price}$</ListItem>
                        <ListItem>hashtags:</ListItem>
                      </List>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </>
          )}
        </Grid>
        {data && data.books[0] && (
          <Box bg="black" borderBottom="1px solid white">
            <Box mt="100px" mb="4" color="white">
              <Heading p="4" size="lg">
                كتب ذات صلة
              </Heading>
            </Box>
            <Carousel
              style={{
                //   marginTop: 100,

                paddingBottom: 10,
              }}
              itemsToScroll={3}
              itemsToShow={3}
            >
              {data.books.map(book => (
                <Link key={book.id} to={`/book/${book.id}`}>
                  <Box color="white" mb="4" cursor="pointer">
                    <Image
                      w="225px"
                      h="350px"
                      m="0 auto"
                      shadow="lg"
                      src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                    ></Image>
                    <Box mt="4" textAlign="center">
                      <Text fontWeight="500" fontSize="xl">
                        {book.title}
                      </Text>
                      <Text fontSize="md">{book.sub_title}</Text>
                      <Text fontSize="sm">{book.author}</Text>
                      <Text fontWeight="bold">${book.price}</Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Carousel>
          </Box>
        )}
        {data && data.articles[0] && (
          <Box bg="black" borderBottom="1px solid white">
            <Box mb="4" color="white">
              <Heading p="4" size="lg">
                مقالات ذات صلة
              </Heading>
            </Box>
            <Carousel
              style={{
                //   marginTop: 100,

                paddingBottom: 10,
              }}
              itemsToScroll={3}
              itemsToShow={3}
            >
              {data.articles.map(article => (
                <Link key={article.id} to={`/article/${article.id}`}>
                  <Box mb="4" cursor="pointer">
                    <Image
                      w="225px"
                      h="350px"
                      m="0 auto"
                      shadow="lg"
                      src={`${process.env.REACT_APP_STORAGE}/${article.cover}`}
                    ></Image>
                    <Box mt="4" textAlign="center">
                      <Text fontWeight="500" fontSize="xl">
                        {article.title}
                      </Text>
                      <Text fontSize="md" color="gray.600">
                        {article.sub_title}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {article.author}
                      </Text>
                      <Text fontWeight="bold">${article.price}</Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Carousel>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getBook: id => dispatch(getBook(id)) };
};

export default connect(null, mapDispatchToProps)(Book);
