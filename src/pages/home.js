import {
  Button,
  ButtonGroup,
  Heading,
  Box,
  Text,
  Image,
  Divider,
  SimpleGrid,
  Input,
  Flex,
} from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box mt="100px" mb="100px">
      <Box m="8" position="relative">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              الدراسات
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              الرواية
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              الشعر
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              القصة القصيرة
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              الفلسفة
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              سير ذاتية
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              يوميات عربية
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              المعاجم والقواميس
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
      <Divider></Divider>
      <Box m="4">
        <Box mr="80px">
          <Link to="/publications/arabDiary">
            <Heading cursor="pointer" m="2">
              منوعات
            </Heading>
          </Link>
          <Divider
            w="20%"
            border="3px solid black"
            opacity="1"
            borderColor="black"
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
        <SimpleGrid columns={[1, 2, 3, 5]}>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
          <Link to="/book">
            <Box mb="4" cursor="pointer">
              <Image
                m="0 auto"
                src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
              ></Image>
              <Box mt="4" textAlign="center">
                <Text fontWeight="500" fontSize="xl">
                  الحرب على المعاقين
                </Text>
                <Text fontSize="md" color="gray.600">
                  الرأسمالية والرفاهية وصنع كارثة بشرية
                </Text>
                <Text fontSize="sm" color="gray.500">
                  إلين كليفورد
                </Text>
                <Text fontWeight="bold">$12.99</Text>
              </Box>
            </Box>
          </Link>
        </SimpleGrid>
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
