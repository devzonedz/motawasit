import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Heading,
  Box,
  Text,
  Image,
  Center,
  SimpleGrid,
  Input,
  Flex,
} from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';

export default function blog() {
  return (
    <Box mt="100px">
      {/* <h1>hdjkqsdhjqhdjk</h1> */}

      <SimpleGrid m="8" columns={[1, 1, 3, 3]} spacing="8">
        <Link to="/singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/zed-books_taxing-africa-640x961.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/hicks-hi-res-from-getty-640x514.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/susanne-jaspars_food-aid-in-sudan-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/1997_waterstones-event_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/cosmic-shift_waterstones_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/06/zed-books_events_drc_somerset-house_feature-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="/singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/zed-books_taxing-africa-640x961.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/hicks-hi-res-from-getty-640x514.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/susanne-jaspars_food-aid-in-sudan-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/1997_waterstones-event_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/cosmic-shift_waterstones_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/06/zed-books_events_drc_somerset-house_feature-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="/singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/zed-books_taxing-africa-640x961.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/hicks-hi-res-from-getty-640x514.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/susanne-jaspars_food-aid-in-sudan-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/1997_waterstones-event_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/cosmic-shift_waterstones_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/06/zed-books_events_drc_somerset-house_feature-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="/singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/zed-books_taxing-africa-640x961.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/hicks-hi-res-from-getty-640x514.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/susanne-jaspars_food-aid-in-sudan-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/1997_waterstones-event_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/cosmic-shift_waterstones_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/06/zed-books_events_drc_somerset-house_feature-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="/singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/zed-books_taxing-africa-640x961.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/hicks-hi-res-from-getty-640x514.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/08/susanne-jaspars_food-aid-in-sudan-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/1997_waterstones-event_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/10/cosmic-shift_waterstones_gower-st-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
        <Link to="singlePost">
          <Box shadow="lg" p="2" cursor="pointer">
            <Text fontSize="xl">حديث</Text>
            <Box overflow="hidden" h="250px">
              <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/06/zed-books_events_drc_somerset-house_feature-640x427.jpg"></Image>
            </Box>
            <Heading m="2" size="lg">
              19 سبتمبر 2018، 18:30 - 20:00 مسرح خليلي محاضرة ، SOAS ، شارع
              ثورنهاوغ ، راسل سكوير ، لندن فرض الضرائب على إفريقيا: إطلاق كتاب
            </Heading>
            <Text fontSize="xl" m="2">
              أصبح يُنظر إلى الضرائب على أنها مركزية للتنمية الأفريقية ، ودورها
              حاسم في خلق العدالة الاجتماعية ودفع التقدم الاقتصادي للقارة. انضم
              إلى Zed Books لإطلاق Taxing Africa ، الذي يضم حلقة نقاش مع
              المؤلفين ومجموعة من المتحدثين الخبراء.
            </Text>
          </Box>
        </Link>
      </SimpleGrid>
      <Flex m="8" justifyContent="center">
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={8}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </Flex>
    </Box>
  );
}
