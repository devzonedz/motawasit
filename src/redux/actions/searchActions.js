import * as t from '../types';
import algoliasearch from 'algoliasearch/lite';

export const getSearch = query => async (dispatch, getState) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_V2}/search?website=${encodeURIComponent("منشورات المتوسط")}&search=${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error('Search failed');
    }

    const data = await response.json();

    dispatch({
      type: t.SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error('Error fetching search results:', error);
    dispatch({
      type: t.SEARCH_FAILURE,
      payload: error,
    });
  }
};
