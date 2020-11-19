import React from 'react';
import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Link,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box color="gray.600" bg="gray.300">
      <SimpleGrid mb="60px" p="30px" columns={3} spacing="8">
        <Flex direction="column">
          <Heading size="lg">المتوسط</Heading>
          <Text>حول المتوسط</Text>
          <Text>اتصل</Text>
          <Text>الأحكام والشروط</Text>
          <Text>سياسة خاصة</Text>
          <Text>أسئلة وأجوبة</Text>
          <Text>النشرة الإخبارية</Text>
          <Heading size="lg" mt="12">
            للمؤلفين
          </Heading>
          <Text>النشر مع المتوسط</Text>
          <Text>للمؤلفين المتعاقد معهم</Text>
        </Flex>

        <Flex direction="column">
          <Heading size="lg">المواضيع</Heading>
          <Text>أفريقيا</Text>
          <Text>الأمريكتان</Text>
          <Text>آسيا</Text>
          <Text>أوروبا</Text>
          <Text>الشرق الأوسط</Text>
          {/* <Text>الأنثروبولوجيا</Text>
          <Text>السيرة الذاتية والمذكرات</Text>
          <Text>اعمال</Text>
          <Text>المدن والعمارة</Text>
          <Text>الثقافة والإعلام</Text>
          <Text>الشؤون الحالية</Text>
          <Text>تطوير</Text>
          <Text>اقتصاديات</Text>
          <Text>التعليم</Text>
          <Text>بيئة</Text>
          <Text>خيال</Text>
          <Text>الجنس والجنس والهويات المثلية</Text>
          <Text>الصحة والطب</Text>
          <Text>التاريخ</Text>
          <Text>حقوق الانسان</Text>
          <Text>السياسة والعلاقات الدولية</Text>
          <Text>فلسفة</Text>
          <Text>العرق وسياسة السكان الأصليين</Text>
          <Text>علم الاجتماع</Text> */}
        </Flex>
        <Flex direction="column">
          <Heading size="lg">الحساب</Heading>
          <Text>تسجيل الدخول</Text>
          <Text>اتصل</Text>

          <Heading size="lg" mt="12">
            وسائل التواصل الاجتماعي
          </Heading>
          <Text>تويتر</Text>
          <Text>الفيسبوك</Text>
          <Text>انستغرام</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
