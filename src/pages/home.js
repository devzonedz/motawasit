import React from 'react';
import {
  Heading,
  Box,
  Divider,
  useColorMode,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
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
    <Box pr="10%" pl="10%" mt="100px" mb="100px">
      <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/black_lives_matter_in_charlotte1800x675-1600x600.jpg"></Image>
      <SimpleGrid mt="8" spacing={4} columns={[1, 2, 2, 3]}>
        <Box>
          <Heading>
            هل يمكن أن تكون حالات الطوارئ الوطنية مهد الديمقراطية؟
          </Heading>
          <Text fontSize="xl">
            مع انهيار الحواجز أمام الديمقراطية الرقمية ، فإن السبب الوحيد لعدم
            المشاركة الجماهيرية هو الحجة القائلة بأن الناس العاديين غير قادرين
            على اتخاذ القرار السياسي.
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/dan_blog_hero_16-9-640x360.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>الحرب على المعوقين الحرب على المعوقين</Heading>
          <Text fontSize="xl">الرأسمالية والرفاهية وصنع كارثة بشرية</Text>
          <Text fontSize="xl" bg="gray.30">
            إلين كليفورد
          </Text>
          <Text fontSize="xl">
            ينفخ الغطاء على ما وصفته الأمم المتحدة بـ "كارثة إنسانية" - حرب
            الحكومة على المعاقين
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>
            هل يمكن أن تكون حالات الطوارئ الوطنية مهد الديمقراطية؟
          </Heading>
          <Text fontSize="xl">
            مع انهيار الحواجز أمام الديمقراطية الرقمية ، فإن السبب الوحيد لعدم
            المشاركة الجماهيرية هو الحجة القائلة بأن الناس العاديين غير قادرين
            على اتخاذ القرار السياسي.
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/dan_blog_hero_16-9-640x360.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>الحرب على المعوقين الحرب على المعوقين</Heading>
          <Text fontSize="xl">الرأسمالية والرفاهية وصنع كارثة بشرية</Text>
          <Text fontSize="xl" bg="gray.30">
            إلين كليفورد
          </Text>
          <Text fontSize="xl">
            ينفخ الغطاء على ما وصفته الأمم المتحدة بـ "كارثة إنسانية" - حرب
            الحكومة على المعاقين
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>
            هل يمكن أن تكون حالات الطوارئ الوطنية مهد الديمقراطية؟
          </Heading>
          <Text fontSize="xl">
            مع انهيار الحواجز أمام الديمقراطية الرقمية ، فإن السبب الوحيد لعدم
            المشاركة الجماهيرية هو الحجة القائلة بأن الناس العاديين غير قادرين
            على اتخاذ القرار السياسي.
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/dan_blog_hero_16-9-640x360.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>الحرب على المعوقين الحرب على المعوقين</Heading>
          <Text fontSize="xl">الرأسمالية والرفاهية وصنع كارثة بشرية</Text>
          <Text fontSize="xl" bg="gray.30">
            إلين كليفورد
          </Text>
          <Text fontSize="xl">
            ينفخ الغطاء على ما وصفته الأمم المتحدة بـ "كارثة إنسانية" - حرب
            الحكومة على المعاقين
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>
            هل يمكن أن تكون حالات الطوارئ الوطنية مهد الديمقراطية؟
          </Heading>
          <Text fontSize="xl">
            مع انهيار الحواجز أمام الديمقراطية الرقمية ، فإن السبب الوحيد لعدم
            المشاركة الجماهيرية هو الحجة القائلة بأن الناس العاديين غير قادرين
            على اتخاذ القرار السياسي.
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/dan_blog_hero_16-9-640x360.jpg"
          ></Image>
        </Box>
        <Box>
          <Heading>الحرب على المعوقين الحرب على المعوقين</Heading>
          <Text fontSize="xl">الرأسمالية والرفاهية وصنع كارثة بشرية</Text>
          <Text fontSize="xl" bg="gray.30">
            إلين كليفورد
          </Text>
          <Text fontSize="xl">
            ينفخ الغطاء على ما وصفته الأمم المتحدة بـ "كارثة إنسانية" - حرب
            الحكومة على المعاقين
          </Text>
          <Image
            mt="4"
            src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
          ></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
