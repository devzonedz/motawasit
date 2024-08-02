import * as t from '../types';

const initialState = {
  results: {},
  isLoading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      };
    case t.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
