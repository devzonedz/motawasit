import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Divider,
  Text,
} from '@chakra-ui/core';

import { connect } from 'react-redux';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

// import { Login, ClearError } from '../../redux/actions/authAction';

export default function Signin(props) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //   const handleSubmit = async (e) => {
  //     // props.ClearError();
  //     await props.Login(login);
  //     // setLogin({ email: '', password: '' });
  //   };

  //   const handleChange = (e) => {
  //     e.persist();
  //     setLogin((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  //     console.log(login);
  //   };

  return (
    <Box
      //   mt={{ base: '10px', md: '0' }}
      //   width={[
      //     '100%', // base
      //     '50%', // 480px upwards
      //     '25%', // 768px upwards
      //     '13%', // 992px upwards
      //   ]}
      w="100%"
    >
      <Text
        // fontSize="xl"
        // fontWeight="bold"
        // ref={btnRef}
        // bg="white"
        // color="blue.500"
        // rounded="20px"
        w="100%"
        onClick={onOpen}
      >
        تسجيل الدخول
      </Text>
      <Drawer
        size="lg"
        // isOpen={!props.auth.loading && !props.auth.error ? false : isOpen}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton
            position="absolute"
            top="10px"
            left="10px"
            right="none"
          />
          <DrawerHeader>تسجيل الدخول</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              {/* {props.auth.error && (
                <Box color="red.700" p="2" textAlign="center" bg="red.100">
                  {props.auth.error}
                </Box>
              )} */}
              <InputGroup>
                <Input
                  //   onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="البريد الالكتروني"
                />
              </InputGroup>

              <InputGroup>
                <Input
                  //   onChange={handleChange}
                  name="password"
                  type={show ? 'text' : 'password'}
                  placeholder="كلمة السر"
                />
                <InputLeftElement width="4.5rem">
                  <Button
                    bg="white"
                    color="black"
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? 'إخفاء' : 'عرض'}
                  </Button>
                </InputLeftElement>
              </InputGroup>
              <Button
                // isLoading={props.auth.loading}
                // onClick={handleSubmit}
                type="submit"
                color="white"
                bg="teal.500"
              >
                تسجيل
              </Button>
              <Divider></Divider>
              {/* <Button
                // isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="blue.500"
              >
                <FaFacebook style={{ marginRight: 10 }}></FaFacebook>
                Facebook
              </Button>
              <Button
                // isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="red.500"
              >
                <FaGoogle style={{ marginRight: 10 }}></FaGoogle>
                Google
              </Button> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     Login: (cerdentials) => dispatch(Login(cerdentials)),
//     ClearError: () => dispatch(ClearError()),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Signin);
