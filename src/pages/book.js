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

export default function book() {
  return (
    <Box mt="100px">
      <Grid pr="10%" pl="10%" templateColumns={['1fr', '1fr', '1fr 2fr', '1fr 2fr']} gap="10px">
        <Box m="4">
          <Image
            w="400px"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/P-1573783900-Secrets-and-Siblings-320x501.jpg"
          ></Image>
          <Button rounded="20px" mt="4" w="400px" variantColor="red">
            اشتري من المتجر
          </Button>
        </Box>
        <Box m="4">
          <Heading>أسرار وأخوات</Heading>
          <Text fontSize="xl">ماري مانينين</Text>
          <Divider></Divider>
          <Text fontSize="xl">
            دراسة علمية بارزة عن بُعد مهمل لنهج إسرائيل في العلاقات خارج الشرق الأوسط. تسلط هذه
            الدراسة الضوء بشكل رسمي على السياق المتطور والطابع المعقد لانخراط إسرائيل مع إفريقيا.
            محتوياته موثقة جيدًا ، ومتوازنة سياسيًا ، ومكتوبة بوضوح ، ومحللة بوضوح. ريتشارد فولك ،
            المقرر الخاص السابق للأمم المتحدة المعني بحالة حقوق الإنسان في الأراضي الفلسطينية
            المحتلة منذ عام 1967
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
                  في خضم الاضطرابات في الشرق الأوسط ، لاحظ القليل إلى أي مدى كانت إسرائيل تبني ببطء
                  ولكن بثبات تحالفات في القارة الأفريقية. في مواجهة رد الفعل الدولي المتزايد ، كان
                  على إسرائيل أن تنظر إلى ما وراء حلفائها الغربيين التقليديين للحصول على الدعم ،
                  وكانت العديد من الحكومات الأفريقية بدورها سعيدة بتلقي الدعم السياسي الإسرائيلي ،
                  والمساعدة الأمنية ، والاستثمارات والتكنولوجيا. ولكن ماذا تعني هذه العلاقات بالنسبة
                  لأفريقيا وللجغرافيا السياسية الأوسع؟ من خلال فحص سياسات التنمية الاستبدادية في
                  إفريقيا ، وظهور المسيحية المولودة مرة أخرى وصناعات إسرائيل عالية التقنية والأسلحة
                  ، من الصراع الإسرائيلي الفلسطيني إلى هجرة الأفارقة إلى إسرائيل والعودة مرة أخرى ،
                  يقدم غيدرون تحليلًا شاملاً القوى والجهات الفاعلة المختلفة التي تشكل علاقات إسرائيل
                  المثيرة للجدل مع دول القارة. على وجه الخصوص ، يوضح الكتاب أن اهتمام إسرائيل
                  بأفريقيا يشكل جزءًا من جهد دبلوماسي أوسع يهدف إلى منع سعي فلسطين للحصول على اعتراف
                  دولي. على الرغم من أن حجم الارتباطات الإسرائيلية الأفريقية لم يتم تقديره كثيرًا
                  حتى الآن ، إلا أن الكتاب يكشف كيف تتفاعل السياسات والمجتمعات الأفريقية والشرق
                  أوسطية المعاصرة وتؤثر على بعضها البعض بطرق عميقة.
                </Text>
              </TabPanel>
              <TabPanel>
                <Text fontSize="xl" mt="4">
                  يوتام جيدرون باحث تركز كتاباته على الهجرة والعلاقات بين الدولة والمجتمع والثقافة
                  الشعبية في إفريقيا وإسرائيل / فلسطين. عمل مع منظمات حقوق الإنسان في إسرائيل وشرق
                  إفريقيا ، ويسعى حاليًا للحصول على درجة الدكتوراه في التاريخ الأفريقي في جامعة
                  دورهام.
                </Text>
              </TabPanel>
              <TabPanel>
                <List mt="4">
                  <ListItem>المقدمة</ListItem>
                </List>
                <List as="ol" styleType="decimal">
                  <ListItem> مغامرة أفريقية</ListItem>
                  <ListItem> إمبراطورية أمنية</ListItem>
                  <ListItem>معارك قديمة وحروب جديدة</ListItem>
                  <ListItem> إسرائيل في أفريقيا</ListItem>
                  <ListItem>إدارة الحدود</ListItem>
                </List>
                <List>
                  <ListItem>خاتمة</ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <Text fontSize="xl" mt="4">
                  "إسرائيل في إفريقيا مثيرة للاهتمام وغنية بالمعلومات ومكتوبة جيدًا وتستند إلى
                  مجموعة واسعة بشكل مثير للإعجاب من المصادر ، تقدم إسرائيل في إفريقيا تحليلًا أصليًا
                  ومحفزًا للفكر وإبداعًا لعلاقات إسرائيل المتطورة مع الدول الأفريقية. سوف يترك
                  العديد من قرائه غاضبين أو متفاجئين ، ولكن بالتأكيد ، مع رؤى أصلية وحث قوي على
                  استكشاف هذا الموضوع بشكل أكبر. غاليا صبار ، مركز روبين الأكاديمي
                </Text>
                <Text fontSize="xl">
                  إن إسرائيل تعود إلى إفريقيا بطريقة مهمة ، وسياسة إسرائيلية نشطة تجاه إفريقيا آخذة
                  في الظهور ، وتبحث عن حلفاء جدد ، وفرص تجارية جديدة وتعاونات أمنية جديدة. يقدم كتاب
                  يوتام جيدرون وصفًا دقيقًا لهذه التطورات ، ووضعها في سياقها في كل من التاريخ
                  والسياسة الإسرائيلية المعاصرة. مساهمة كبيرة في موضوع تم التغاضي عنه. إيان تايلور ،
                  جامعة سانت أندروز
                </Text>
                <Text fontSize="xl">
                  دراسة علمية بارزة عن بُعد مهمل لنهج إسرائيل في العلاقات خارج الشرق الأوسط. تسلط
                  هذه الدراسة الضوء بشكل رسمي على السياق المتطور والطابع المعقد لانخراط إسرائيل مع
                  إفريقيا. محتوياته موثقة جيدًا ، ومتوازنة سياسيًا ، ومكتوبة بوضوح ، ومحللة بوضوح.
                  ريتشارد فولك ، المقرر الخاص السابق للأمم المتحدة المعني بحالة حقوق الإنسان في
                  الأراضي الفلسطينية المحتلة منذ عام 1967
                </Text>
                <Text fontSize="xl">
                  يروي هذا الكتاب الجذاب قصة مهمة ، ولكن لا يزال يساء فهمها ، عن تورط إسرائيل في
                  إفريقيا على مدى العقود الماضية. من الدفاع والصناعات الاستخراجية إلى الهجرة ،
                  بالإضافة إلى الطريقة التي يلعب بها الصراع الدبلوماسي على فلسطين والتنافس في كل
                  مكان مع إيران في القارة ، إسرائيل في رؤى إفريقيا تستحق قراءًا واسعًا. ريكاردو
                  سواريس دي أوليفيرا ، جامعة أكسفورد
                </Text>
                <Text fontSize="xl">
                  قصة تحالفات إسرائيل الجديدة في القارة الأفريقية غير مروية إلى حد كبير. يقدم لنا
                  جيدرون خدمة بجعلهم موضوع كتابه. تأخذ إسرائيل في إفريقيا مكانها في موجة جديدة من
                  المنح الدراسية التي لا غنى عنها لتقييم مكانة الدول الأفريقية سريعة التغير في
                  العلاقات الدولية. جوني شتاينبرغ ، جامعة أكسفورد
                </Text>
              </TabPanel>
              <TabPanel>
                <List mt="4">
                  <ListItem>تاريخ النشر: 15 أبريل 2020 192 صفحة</ListItem>
                  <ListItem>أرقام ISBN للمنتج:</ListItem>
                  <ListItem>غلاف عادي: 9781786995025</ListItem>
                  <ListItem>غلاف مقوى: 9781786995032</ListItem>
                  <ListItem>الكتاب الإلكتروني ePub: 9781786995056</ListItem>
                  <ListItem>أوقد الكتاب الإلكتروني: 9781786995063</ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Grid>
      <Box mt="100px" bg="black" color="white">
        <Heading p="4" size="lg">
          المحتوى ذو الصلة
        </Heading>
      </Box>
      <Carousel
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
            عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
            Unknowers.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
        </Box>
        <Box p="8" color="white">
          <Text>متجر | كتاب الاسبوع</Text>
          <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
          <Text m="2">
            التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A mince
            عبر الزمن" Queer Tour of London.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
        </Box>
        <Box p="8" color="white">
          <Text>25.03.20</Text>
          <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
          <Text m="2">
            عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
            Unknowers.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
        </Box>
        <Box p="8" color="white">
          <Text>متجر | كتاب الاسبوع</Text>
          <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
          <Text m="2">
            التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A mince
            عبر الزمن" Queer Tour of London.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
        </Box>
        <Box p="8" color="white">
          <Text>25.03.20</Text>
          <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
          <Text m="2">
            عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
            Unknowers.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
        </Box>
        <Box p="8" color="white">
          <Text>متجر | كتاب الاسبوع</Text>
          <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
          <Text m="2">
            التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A mince
            عبر الزمن" Queer Tour of London.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
        </Box>
      </Carousel>
    </Box>
  );
}
