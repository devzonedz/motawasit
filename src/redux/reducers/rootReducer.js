import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

import locReducer from './locReducer';

const rootReducer = combineReducers({
  location: locReducer,
  search: searchReducer
});

export default rootReducer;