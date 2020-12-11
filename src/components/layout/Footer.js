import React from 'react';
import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box pb="60px" pl="10%" pr="10%" color="white" bg="black">
      <SimpleGrid mb="100px" p="30px" columns={[1, 1, 3, 3]} spacing="8">
        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="lg">
            المتوسط
          </Heading>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            حول المتوسط
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            اتصل
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            الأحكام والشروط
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            سياسة خاصة
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            أسئلة وأجوبة
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            النشرة الإخبارية
          </Text>
          <Heading fontFamily="diodrum-bold !important" size="lg" mt="12">
            للمؤلفين
          </Heading>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            النشر مع المتوسط
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            للمؤلفين المتعاقد معهم
          </Text>
        </Flex>

        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="lg">
            المواضيع
          </Heading>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            أفريقيا
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            الأمريكتان
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            آسيا
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            أوروبا
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            الشرق الأوسط
          </Text>
          {/* <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">الأنثروبولوجيا</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">السيرة الذاتية والمذكرات</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">اعمال</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">المدن والعمارة</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">الثقافة والإعلام</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">الشؤون الحالية</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">تطوير</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">اقتصاديات</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">التعليم</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">بيئة</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">خيال</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">الجنس والجنس والهويات المثلية</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">الصحة والطب</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">التاريخ</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">حقوق الانسان</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">السياسة والعلاقات الدولية</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">فلسفة</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">العرق وسياسة السكان الأصليين</Text>
          <Text                   fontFamily="diodrum-med !important"
 fontSize="2xl">علم الاجتماع</Text> */}
        </Flex>
        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="lg">
            الحساب
          </Heading>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            تسجيل الدخول
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            اتصل
          </Text>

          <Heading fontFamily="diodrum-bold !important" size="lg" mt="12">
            وسائل التواصل الاجتماعي
          </Heading>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            تويتر
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            الفيسبوك
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="2xl"
          >
            انستغرام
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
