import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#f5f2ef')(props),
    },
  }),
};

// const components = {
//   Drawer: {
//     // setup light/dark mode component defaults
//     baseStyle: props => ({
//       dialog: {
//         bg: mode('white', '#141214')(props),
//       },
//     }),
//   },
// };

const theme = extendTheme({
  //   components,
  styles,
});

export default theme;
