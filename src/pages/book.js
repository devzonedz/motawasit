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
} from '@chakra-ui/core';
import Carousel from 'react-elastic-carousel';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { getBook } from '../redux/actions/booksActions';

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
          pr={['2%', '2%', '10%', '10%']}
          pl={['2%', '2%', '10%', '10%']}
          templateColumns={['1fr', '1fr', '1fr 2fr', '1fr 2fr']}
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
                <Button
                  rounded="20px"
                  mt="4"
                  w={['300px', '300px', '400px', '400px']}
                  colorScheme="red"
                >
                  اذهب الى المتجر
                </Button>
              </Box>
              <Box m="4">
                <Heading m="4">{data.title}</Heading>
                {/* <Text fontSize="xl">{data.author}</Text> */}
                <Divider></Divider>
                <Text m="4" fontSize="xl">
                  {data.description}
                </Text>
                <Divider></Divider>
                <Tabs>
                  <TabList>
                    <Tab fontSize="18px"> عن الكتاب</Tab>
                    <Tab fontSize="18px">عن المؤلف</Tab>
                    <Tab fontSize="18px"> فهرس الكتاب</Tab>
                    <Tab fontSize="18px"> في الصحافة</Tab>
                    <Tab fontSize="18px">معلومات الكتاب</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Text fontSize="xl" mt="4">
                        {data.overview}
                      </Text>
                    </TabPanel>
                    <TabPanel>
                      <Text fontSize="xl" mt="4">
                        يوتام جيدرون باحث تركز كتاباته على الهجرة والعلاقات بين
                        الدولة والمجتمع والثقافة الشعبية في إفريقيا وإسرائيل /
                        فلسطين. عمل مع منظمات حقوق الإنسان في إسرائيل وشرق
                        إفريقيا ، ويسعى حاليًا للحصول على درجة الدكتوراه في
                        التاريخ الأفريقي في جامعة دورهام.
                      </Text>
                    </TabPanel>
                    <TabPanel fontSize="xl" whiteSpace="pre-line">
                      {data.index}
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
                        <ListItem>
                          تاريخ النشر:{' '}
                          {moment(data.publish_date).format('DD/MM/yyyy')}{' '}
                        </ListItem>
                        <ListItem>عدد الصفحات: {data.page_number} </ListItem>
                        <ListItem>السعر: {data.price}$</ListItem>
                        <ListItem>أرقام ISBN للمنتج: {data.isbn}</ListItem>
                      </List>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </>
          )}
        </Grid>
        <Box mt="100px" bg="black" color="white">
          <Heading p="4" size="lg">
            المحتوى ذو الصلة
          </Heading>
        </Box>
        {/* <Carousel
            style={{
              //   marginTop: 100,
              backgroundColor: 'black',
              borderBottom: '1px solid white',
              paddingBottom: 10,
            }}
            itemsToScroll={3}
            itemsToShow={3}
          >
            <Box p="8" color="white">
              <Text>25.03.20</Text>
              <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
              <Text m="2">
                عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم
                المعرفة - من مؤلف The Unknowers.
              </Text>
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
            </Box>
            <Box p="8" color="white">
              <Text>متجر | كتاب الاسبوع</Text>
              <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
              <Text m="2">
                التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT +
                اليوم ، من مبتكر "A mince عبر الزمن" Queer Tour of London.
              </Text>
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
            </Box>
            <Box p="8" color="white">
              <Text>25.03.20</Text>
              <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
              <Text m="2">
                عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم
                المعرفة - من مؤلف The Unknowers.
              </Text>
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
            </Box>
            <Box p="8" color="white">
              <Text>متجر | كتاب الاسبوع</Text>
              <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
              <Text m="2">
                التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT +
                اليوم ، من مبتكر "A mince عبر الزمن" Queer Tour of London.
              </Text>
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
            </Box>
            <Box p="8" color="white">
              <Text>25.03.20</Text>
              <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
              <Text m="2">
                عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم
                المعرفة - من مؤلف The Unknowers.
              </Text>
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
            </Box>
            <Box p="8" color="white">
              <Text>متجر | كتاب الاسبوع</Text>
              <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
              <Text m="2">
                التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT +
                اليوم ، من مبتكر "A mince عبر الزمن" Queer Tour of London.
              </Text>
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
            </Box>
          </Carousel> */}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getBook: id => dispatch(getBook(id)) };
};

export default connect(null, mapDispatchToProps)(Book);
