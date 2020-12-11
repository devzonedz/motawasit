import React from 'react';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Select,
  Button,
  useToast,
} from '@chakra-ui/core';
import { connect } from 'react-redux';

import { postBook } from '../../redux/actions/booksActions';
import PickFile from './PickFile';

function Publishlist({ postBook }) {
  const toast = useToast();

  const [data, setData] = React.useState({
    email: null,
    phone: null,
    address: null,
    message: null,
    nickname: null,
    author_name: null,
    book_title: null,
    book_category: 'دراسة',
    book_language: 'الإنجليزية',
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = e => {
    e.persist();
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    setLoading(true);
    const response = await postBook(data);
    console.log(response);
    if (response.status === 201) {
      setLoading(false);

      toast({
        title: 'نجاح',
        description: 'تمت العملية بنجاح',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setInterval(function () {
        window.location.replace('/home');
      }, 1000);
    }
  };

  console.log(data);
  return (
    <Box mt="100px" mb="100px">
      <Box
        textAlign="right"
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Heading fontFamily="diodrum-bold !important" size="xl">
          شروط النشر
        </Heading>
        <Text fontSize="2xl" m="4">
          تتشرف "منشورات المتوسط" باستقبال مخطوطاتكم في هذه الصفحة
        </Text>
        <Text fontSize="2xl" m="4">
          تطّلع هيئة التحرير على النصوص المرسلة وذلك حسب اختصاصها، ثم ترد فيما
          يتعلق بنشر المخطوط أو تعتذر عن نشره.
        </Text>
        <Text fontSize="2xl" m="4">
          فضلاً عن معايير الدار في النشر فإن لهيئة التحرير معاييرها الأدبية
          والفنية، التي تعتمدها فيما يخص نشر المخطوطات، وهي أيضا تستشير قسمي
          الإنتاج والتوزيع في قراراها النهائي.
        </Text>
        <Text fontWeight="bold" fontSize="2xl" m="4">
           تتمنى منشورات المتوسط عليكم مراعاة، قدر الإمكان، ما يلي:
        </Text>
        <List styleType="disc" fontSize="2xl" m="4">
          <ListItem>إرسال المخطوط كاملاً.</ListItem>
          <ListItem>إرسال نبذة عن المؤلف.</ListItem>
          <ListItem>
            إرسال ملخص للعمل، إن لم يكن من غير الشعر والقصة القصيرة.
          </ListItem>
          <ListItem>
            المدة اللازمة لاتخاذ قرار أولي حول المخطوط هي 10 أيام كحد أقصى.
          </ListItem>
          <ListItem>
            المدة اللازمة لاتخاذ قرار نهائي حول المخطوط (عدا الشعر والقصة
            القصيرة) قد تستغرق شهرين - كحد أقصى. أما الشعر والقصة القصير شهراً
            على الأكثر.
          </ListItem>
          <ListItem>
            في حال رغبتم الاستفسار عن أي مخطوط رجاء مراجعة الدار عن طريق البريد
            الالكتروني (الإيميل) فقط.
          </ListItem>
          <ListItem>
            تعتذر الدار عن تقديم أي سبب من الأسباب التي دفعتها للاعتذار عن نشر
            أي مخطوط.
          </ListItem>
        </List>
        <Text fontWeight="bold" fontSize="2xl" m="4">
          النشر ضمن سلسلة براءات:
        </Text>
        <Text fontSize="2xl" m="4">
          سلسلة براءات هي سلسلة خاصة بالشعر والقصة القصيرة، ولها لجنة تحكيم
          مستقلة تتألف من ستة أعضاء، تكفي موافقة أربعة منهم لنشر المخطوط.
        </Text>
        <Text fontSize="2xl" m="4">
          يتم أرسال المخطوط لأعضاء اللجنة دون اسم الكاتب، وفي حال وصول موافقة
          العضو الرابع يتم ابلاغ الكاتب.{' '}
        </Text>
        <Text fontSize="2xl" m="4">
          في حال توازي عدد الموافقين مع الرافضين من أعضاء اللجنة، تستعين الدار
          بهيئة التحرير لحسم قضية نشر الكتاب.
        </Text>
        <Text fontWeight="bold" fontSize="2xl" m="4">
          اقتراحات الترجمة:
        </Text>
        <Text fontSize="2xl" m="4">
          يرسل المترجم عنوان الكتاب الذي يقترح ترجمته (أو إعادة ترجمته) في اللغة
          الأصلية، إضافة إلى السبب الذي جعله يرغب بترجمة هذا الكتاب، ثم ملخصاً
          عن الكتاب، وأخيراً نموذجاً مترجماً لا يقل عن 1000 كلمة من الكتاب
          الأصلي.
        </Text>
        <Text fontSize="2xl" m="4">
          نشكر الجميع ونرحب بكم لتكونوا من أسرة الدار، وكل الود.
        </Text>
        <Box p="4" rounded="10px">
          <Text fontSize="2xl" m="4" fontWeight="bold">
            التقدم بنشر كتاب:
          </Text>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">اسم المؤلف</FormLabel>
            <Input
              onChange={handleChange}
              type="text"
              name="author_name"
              placeholder="اسم المؤلف"
            ></Input>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">كنية المؤلف</FormLabel>
            <Input
              onChange={handleChange}
              name="nickname"
              type="text"
              placeholder="كنية المؤلف"
            ></Input>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">عنوان المؤلف البريدي</FormLabel>
            <Input
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="عنوان المؤلف البريدي"
            ></Input>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">إيميل المؤلف</FormLabel>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="إيميل المؤلف"
            ></Input>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">
              رقم الهاتف الثابت أو الموبايل
            </FormLabel>
            <Input
              onChange={handleChange}
              name="phone"
              type="text"
              placeholder="رقم الهاتف الثابت أو الموبايل"
            ></Input>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">عنوان الكتاب</FormLabel>
            <Input
              onChange={handleChange}
              name="book_title"
              type="text"
              placeholder="عنوان الكتاب"
            ></Input>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">جنس الكتاب</FormLabel>
            <Select onChange={handleChange} name="book_category" placeholder="">
              <option value="دراسة"> دراسة</option>
              <option value="رواية"> رواية</option>
              <option value="قصة قصيرة "> قصة قصيرة </option>
              <option value="شعر"> شعر</option>
              <option value="يوميات"> يوميات</option>
              <option value="رحلات"> رحلات</option>
              <option value="غير ذلك"> غير ذلك</option>
            </Select>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">اللغة الأصلية</FormLabel>
            <Select onChange={handleChange} name="book_language" placeholder="">
              <option value="الإنجليزية"> الإنجليزية</option>
              <option value="الصينية"> الصينية</option>
              <option value=" الهندية "> الهندية </option>
              <option value="العربية"> العربية</option>
              <option value="الإسبانية"> الإسبانية</option>
              <option value="الروسية"> الروسية</option>
              <option value=" البرتغالية"> البرتغالية</option>
              <option value=" البنغالية"> البنغالية</option>
              <option value=" الفرنسية"> الفرنسية</option>
              <option value=" الألمانية"> الألمانية</option>
            </Select>
          </FormControl>
          <FormControl w="90%" m="4">
            <FormLabel textAlign="right">اترك رسالة </FormLabel>
            <Textarea
              onChange={handleChange}
              name="message"
              type="text"
              placeholder="اترك رسالة "
            ></Textarea>
          </FormControl>
          <Box w="90%" m="4">
            <PickFile setData={setData}></PickFile>
          </Box>
          {/* <FormControl w="90%" m="4">
            <FormLabel textAlign="right">تحميل المخطوط </FormLabel>
            <Input
              onChange={handleChange}
              name="file"
              type="file"
              placeholder="تحميل المخطوط"
            ></Input>
          </FormControl> */}
          <Text color="gray.500" fontSize="2xl" m="4">
            أتعهد بأن هذا المخطوط غير مقدم لأي ناشر آخر وبأني وبالنقر على زر
            (تقديم) سأنتظر الموافقة، أو الاعتذار الأوليين، كمدة أقصاها 10 أيام
            تبدأ من لحظة النقر على زر (تقديم)
          </Text>
          <FormControl w="90%" m="4">
            <Button
              isLoading={loading}
              isDisabled={
                !data.file ||
                !data.address ||
                !data.phone ||
                !data.message ||
                !data.email ||
                !data.nickname ||
                !data.author_name ||
                !data.book_title ||
                !data.book_language ||
                !data.book_category
              }
              _hover={{ bg: '#212121' }}
              w="100%"
              bg="black"
              color="white"
              onClick={handleSubmit}
            >
              تقديم
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { postBook: letter => dispatch(postBook(letter)) };
};

export default connect(null, mapDispatchToProps)(Publishlist);
