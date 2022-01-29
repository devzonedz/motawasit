import React from 'react';
import { Helmet } from 'react-helmet';

import { Box, Heading, Text } from '@chakra-ui/react';

export default function publishlist() {
  return (
    <Box mt="100px" mb="100px">
      <Helmet>
        <title> الأدب أقوى</title>
      </Helmet>
      <Heading
        fontFamily="diodrum-bold !important"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        الأدب أقوى
        {/* <Divider
          mt="4"
          opacity="1"
          border="3px solid black"
          pl="20%"
          pr="20%"
          //   m="4"
          borderColor="black"
          w="20%"
        ></Divider> */}
      </Heading>
      <Box
        textAlign="right"
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Text fontSize="2xl" m="4">
          أطلقت منشورات المتوسط عام 2016، سلسلة أدبية بعنوان "الأدب أقوى"،
          تتمثَّل في إصدار طبعة فلسطينية لعدد من كتُبها بالتزامن مع صدور طبعتها
          في العالم العربي، ما يشكِّلُ فرصةً لكتب الدار في أن تكون جزءًا من
          العمل المقاوم لسلطات الاحتلال، من خلال كسر التضييق الذي يُفرض على
          القارئ الفلسطيني، وعلى الكتب الراغبة بالتواجد على الأراضي الفلسطينية
          المحتلة.
        </Text>
        <Text fontSize="2xl" m="4">
          في حديثه لمجلة "رمَّان" الثقافية صرَّحَ مدير منشورات المتوسط خالد
          سليمان الناصري، بأن "حلم أي فلسطيني في الخارج هو العودة، هذه العودة
          يمكن أن نجسدها في أن نطلق مشاريعنا من داخل فلسطين، فهذا نوع من
          العودة." 
        </Text>
        <Text fontSize="2xl" m="4">
          يقول بأن "الفكرة بدأت على إثر مشاركة الدار في معرض فلسطين الدولي
          للكتاب في ٢٠١٦. حيث تعرضنا لموقف مزعج جداً، يقول. وذلك أن كتب
          "المتوسط"، مع كتب عربية كثيرة، ظلت محتجزة على حدود دولة الاحتلال
          الإسرائيلي ولم تدخل إلا آخر يوم في المعرض، بل آخر ساعتين منه. بعد فترة
          كنت أتابع ما جرى مع أصدقائنا في الدار الرقمية للتوزيع والتي أخذت
          إصدارات جديدة لنا من معرض عمان الدولي للكتاب. وما زاد تأخير الكتب في
          الدول كذلك كان تزامن وصولها إلى حدود دولة الاحتلال مع عطل دينية طويلة
          خاصة بهم، ليس هناك أي علاقة للفلسطينيين بها. وفوق ذلك كانت هنالك
          خسارات مادية أجبروا على دفعها كأجور تخزين حتى تنتهي تلك العطل!
        </Text>
        <Text fontSize="2xl" m="4">
          ثم أجرينا نقاشات وتبادل أفكار مع أصدقاء مثقفين فلسطينيين حول فكرة
          الطبعة الفلسطينية، ولاقت استحسان الجميع، وبدت كحل ممتاز. تستطيع سلطات
          الاحتلال تأخير وعرقلة وصول الكتب، بل تستطيع منعها من الدخول إذا شاءت
          ذلك. حسناً، لنطبع إذن في الداخل. وهكذا بدأنا وها هي أولى كتبنا تصدر
          هناك".
        </Text>
        <Text fontSize="2xl" m="4" fontWeight="bold">
          الأدب أقوى هي مبادرة ثقافية تهدف إلى مدِّ جسرٍ معرفيٍّ بين الكاتب
          والكتاب في فلسطين وخارجها، مما يتيح المجال لتجاوز الكثير من العقبات
          والعراقيل التي يفرضها الاحتلال الصهيوني للحيلولة دون وصول الكتاب
          العربي إلى فلسطين، والتي يسعى من خلالها إلى تعميق الحصار والعزل
          الثقافي بين فلسطين وبعدها العربي والإنساني.
        </Text>
      </Box>
    </Box>
  );
}
