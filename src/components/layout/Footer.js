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
    <Box bg="black">
      <Box pb="60px" pl="10%" pr="10%" color="white" bg="black">
        <SimpleGrid p="30px" columns={[1, 1, 3, 3]} spacing="8">
          <Flex direction="column">
            <Heading fontFamily="diodrum-bold !important" size="md">
              المتوسط
            </Heading>
            <Link to="/about">
              <Text
                color="gray.200"
                fontFamily="diodrum-med !important"
                fontSize="md"
              >
                حول المتوسط
              </Text>
            </Link>
            <Link to="/about">
              <Text
                color="gray.200"
                fontFamily="diodrum-med !important"
                fontSize="md"
              >
                وكلاء وموزعون
              </Text>
            </Link>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              اتصل
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الأحكام والشروط
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              سياسة خاصة
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              أسئلة وأجوبة
            </Text>

            <Heading fontFamily="diodrum-bold !important" size="md" mt="12">
              للمؤلفين
            </Heading>
            <Link to="/ourWriters/publishConditions">
              <Text
                color="gray.200"
                fontFamily="diodrum-med !important"
                fontSize="md"
              >
                النشر مع المتوسط
              </Text>
            </Link>
          </Flex>

          <Flex direction="column">
            <Heading fontFamily="diodrum-bold !important" size="md">
              المواضيع
            </Heading>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الدراسات
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الرواية
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الشعر
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              القصة القصيرة
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الفلسفة{' '}
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              سير ذاتية{' '}
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              يوميات عربية{' '}
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              المعاجم والقواميس{' '}
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              منوعات{' '}
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading fontFamily="diodrum-bold !important" size="md">
              وسائل التواصل
            </Heading>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              تويتر
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الفيسبوك
            </Text>
            <Text
              color="gray.200"
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              انستغرام
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        color="white"
        mb="60px"
        borderTop="1px solid white"
        textAlign="center"
        p="4"
      >
        &copy; Copyright 2021
      </Box>
    </Box>
  );
}
