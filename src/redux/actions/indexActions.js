import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getImages = () => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/homeImages`, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
