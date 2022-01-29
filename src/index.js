import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './util/theme';
import { CSSReset } from '@chakra-ui/react';

import store from './redux/store';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </PersistGate>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
