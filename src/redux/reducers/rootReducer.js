import { combineReducers } from 'redux';

import locReducer from './locReducer';

const rootReducer = combineReducers({
  location: locReducer,
});

export default rootReducer;
