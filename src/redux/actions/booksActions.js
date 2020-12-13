import * as t from '../types';
import axios from 'axios';
import { serialize } from 'object-to-formdata';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const multipart = {
  'Content-Type': 'multipart/form-data',
};

export const getBooks = (
  category,
  featured,
  translate,
  furthercoming
) => async (dispatch, getState) => {
  console.log(category, featured, translate, furthercoming);
  let data;

  if (!category && !featured && !translate && !furthercoming) {
    console.log('all books no filter');
    data = await axios
      .get(`${process.env.REACT_APP_API}/books?website=منشورات المتوسط`, {
        headers,
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (!category && featured && !translate && !furthercoming) {
    console.log('just featured');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}`,
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (!category && featured && translate && !furthercoming) {
    console.log('feautred with transltae');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}&translate=${translate}`,
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (category && !featured && !translate && !furthercoming) {
    console.log('just category');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}`,
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (!category && !featured && !translate && furthercoming) {
    console.log('just category');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&furthercoming=${furthercoming}`,
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (!category && !featured && translate && !furthercoming) {
    console.log('just translate');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&translate=${translate}`,
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (category && !featured && translate && !furthercoming) {
    console.log('category with translate');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}&translate=${translate}`,
        { headers }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else if (!category && !featured && translate && furthercoming) {
    console.log('furthercoming with translate');
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&furthercoming=${furthercoming}&translate=${translate}`,
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

  //   if (furthercoming) {
  //     console.log('further block excuted');

  //     data = await axios
  //       .get(
  //         `${
  //           process.env.REACT_APP_API
  //         }/books?website=منشورات المتوسط&furthercoming=${furthercoming.toString()}`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         console.log(res);
  //         return res;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   } else if (featured && !category) {
  //     console.log('featued block excuted');

  //     data = await axios
  //       .get(
  //         `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&featured=${featured}&translate=${translate}`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         console.log(res);
  //         return res;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   } else if (translate || category) {
  //     console.log('translated block excuted');
  //     data = await axios
  //       .get(
  //         `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}&translate=${translate}`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         //   console.log(res);
  //         return res;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   } else {
  //     console.log('category block excuted');

  //     data = await axios
  //       .get(
  //         `${process.env.REACT_APP_API}/books?website=منشورات المتوسط`,
  //         //   { website: 'المتوسط' },
  //         { headers }
  //       )
  //       .then(res => {
  //         console.log(res);
  //         return res;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
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
export const postBook = payload => async (dispatch, getState) => {
  console.log(payload);
  const formData = serialize(payload);

  console.log(formData);
  let data;
  data = await axios
    .post(`${process.env.REACT_APP_API}/uploadFile`, formData, { multipart })
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
