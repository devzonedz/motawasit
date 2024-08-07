import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getSeries = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/series`, { headers });
    return res.data.series; // Return the series array directly
  } catch (err) {
    console.error(err);
    return []; // Return an empty array in case of an error
  }
};

export const getCat = page => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API}/loadCategories?website=منشورات%20المتوسط`,
      { headers }
    );
    return res.data; // Return only the data
  } catch (err) {
    console.error(err);
    return []; // Return an empty array in case of an error
  }
};
