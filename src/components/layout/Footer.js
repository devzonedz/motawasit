import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box pb="60px" pl="10%" pr="10%" color="white" bg="black">
      <SimpleGrid mb="100px" p="30px" columns={[1, 1, 3, 3]} spacing="8">
        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="md">
            المتوسط
          </Heading>
          <Link to="/about">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              عن المتوسط
            </Text>
          </Link>
          <Link to="/contact">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              اتصل بنا
            </Text>
          </Link>
          <Link to="/workwithus">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              اعمل مع المتوسط
            </Text>
          </Link>
          <Link to="/terms">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الأحكام والشروط
            </Text>
          </Link>
          <Link to="/policy">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              سياسة خاصة
            </Text>
          </Link>
          <Link to="/questions">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              أسئلة متكررة
            </Text>
          </Link>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            النشرة الإخبارية
          </Text>

          <Text
            mt="12"
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            P.Iva 10078540969
          </Text>
          <Text
            color="gray.200"
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            Numero REA MI-2503229
          </Text>
        </Flex>

        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="md">
            قوائم الكتب والكاتالوغات
          </Heading>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            تحميل قائمة إكسل
          </Text>

          <Heading mt="12" fontFamily="diodrum-bold !important" size="md">
            التوزيع والحقوق
          </Heading>
          <Link to="/buyrights">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              شراء حقوق التأليف والترجمة{' '}
            </Text>
          </Link>
          <Link to="/transaprovals">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              موافقات الترجمة
            </Text>
          </Link>
          <Link to="/buybooks">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              شراء الكتب من المكتبات والموزعين
            </Text>
          </Link>
          <Link to="/dist">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              وكلاء وموزعون
            </Text>
          </Link>
        </Flex>
        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="md">
            للمؤلفين
          </Heading>
          <Link to="/ourWriters/publishConditions">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              النشر مع المتوسط
            </Text>
          </Link>
          <Link to="/contactauth">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              للتواصل مع كتّاب المتوسط{' '}
            </Text>
          </Link>
          <Heading mt="12" fontFamily="diodrum-bold !important" size="md">
            وسائل التواصل الاجتماعي
          </Heading>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            تويتر
          </Text>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            فيسبوك
          </Text>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            انستغرام
          </Text>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            لينكدن
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
