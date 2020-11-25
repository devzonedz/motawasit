import React from 'react';
import { Heading, Box, Divider, useColorMode } from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';

import CatBooks from '../components/books/catBooks';

function Home(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };
  return (
    <Box mt="100px" mb="100px">
      <Box m="8">
        <Box mr="80px">
          <Link to={`/books/الدراسات`}>
            <Heading cursor="pointer" m="2">
              الدراسات
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="4px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الدراسات"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/الرواية`}>
            <Heading cursor="pointer" m="2">
              الرواية
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الرواية"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/الشعر`}>
            <Heading cursor="pointer" m="2">
              الشعر
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الشعر"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/القصة القصيرة`}>
            <Heading cursor="pointer" m="2">
              القصة القصيرة
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="القصة القصيرة"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/الفلسفة`}>
            <Heading cursor="pointer" m="2">
              الفلسفة
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="الفلسفة"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/سير ذاتية`}>
            <Heading cursor="pointer" m="2">
              سير ذاتية
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="سير ذاتية"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/يوميات عربية`}>
            <Heading cursor="pointer" m="2">
              يوميات عربية
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="يوميات عربية"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/المعاجم والقواميس`}>
            <Heading cursor="pointer" m="2">
              المعاجم والقواميس
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category=" المعاجم والقواميس"></CatBooks>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to={`/books/منوعات`}>
            <Heading cursor="pointer" m="2">
              منوعات
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="2px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <Box d="flex" m="4">
            <Heading size="md" m="2">
              عربي
            </Heading>
            <Heading size="md" m="2">
              مترجم
            </Heading>
          </Box>
        </Box>
        <CatBooks category="منوعات"></CatBooks>
      </Box>
    </Box>
    // <Box mt="100px">
    //   {/* <h1>hdjkqsdhjqhdjk</h1> */}
    //   <Head>
    //     <title>الرئيسية</title>
    //     <link rel="icon" to="/favicon.ico" />
    //   </Head>
    //   <Link to="/singlePost">
    //     <Box cursor="pointer" m="2">
    //       <Flex justifyContent="center">
    //         <Box  m="4">
    //           <Text m="2" fontSize="xl">
    //             كل حياة السود مهمة
    //             <BsArrowUpLeft style={{ display: 'inline' }}></BsArrowUpLeft>
    //           </Text>
    //           <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/black_lives_matter_in_charlotte1800x675-1600x600.jpg"></Image>
    //         </Box>
    //       </Flex>
    //     </Box>
    //   </Link>
    //   <SimpleGrid m="8" columns={[1, 1, 3, 3]} spacing="8">
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_modernity-and-the-queer_01-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_lbgt-vs-queer-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/02/zed_blog_facing_patriarchy_hero-1-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_modernity-and-the-queer_01-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_lbgt-vs-queer-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/02/zed_blog_facing_patriarchy_hero-1-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_modernity-and-the-queer_01-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_lbgt-vs-queer-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/02/zed_blog_facing_patriarchy_hero-1-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_modernity-and-the-queer_01-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>25.03.20</Text>
    //         <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
    //         <Text m="2">
    //           عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة - من مؤلف The
    //           Unknowers.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/02/zed-books_blog_lbgt-vs-queer-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>متجر | كتاب الاسبوع</Text>
    //         <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
    //         <Text m="2">
    //           التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم ، من مبتكر "A
    //           mince عبر الزمن" Queer Tour of London.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"></Image>
    //       </Box>
    //     </Link>
    //     <Link to="/singlePost">
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Text>الحرب على المعوقين: ملخص سهل القراءة</Text>
    //         <Heading>شاذة ما بعد الاستعمار مقابل إنهاء استعمار اللوطي؟</Heading>
    //         <Text m="2">
    //           ارتبطت اللويزة بالحداثة في معظم نقاشات القرن العشرين حول الجندر والجنس.
    //         </Text>
    //         <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/02/zed_blog_facing_patriarchy_hero-1-640x427.jpg"></Image>
    //       </Box>
    //     </Link>
    //   </SimpleGrid>
    //   <Flex justifyContent="center" border="1px solid black" m="8" p="6">
    //     <Flex direction="column">
    //       <Text m="2" fontSize="xl">
    //         ابق على اطلاع مع Zed من خلال الاشتراك في النشرة الإخبارية الأسبوعية
    //       </Text>
    //       <Box shadow="lg" p="2" cursor="pointer">
    //         <Input m="2" placeholder="عنوان بريدك الإلكتروني هنا"></Input>

    //         <Button w="100%" m="2" bg="black" color="white">
    //           الإشتراك
    //         </Button>
    //       </Box>
    //     </Flex>
    //   </Flex>
    // </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
