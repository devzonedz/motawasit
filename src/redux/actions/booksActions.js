import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getBooks = (
  category,
  featured,
  translate,
  furthercoming
) => async (dispatch, getState) => {
  console.log(category, featured, translate, furthercoming);
  let data;
  if (furthercoming) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&furthercoming=${furthercoming}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (featured && !category && !translate) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (translate) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}&translate=${translate}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        //   console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
  return data;
};

export const getBooksBySerie = serie => async (dispatch, getState) => {
  console.log(serie);
  let data;
  data = await axios
    .get(
      `${process.env.REACT_APP_API}/books?serie=${serie}`,
      //   { website: 'المتوسط' },
      { headers }
    )
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};

export const getBook = id => async (dispatch, getState) => {
  const data = await axios
    .get(
      `${process.env.REACT_APP_API}/books/${id}`,
      //   { website: 'المتوسط' },
      { headers }
    )
    .then(res => {
      //   console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
