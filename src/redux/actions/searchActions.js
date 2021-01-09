import * as t from '../types';
import algoliasearch from 'algoliasearch/lite';

export const getSearch = query => async (dispatch, getState) => {
  const searchClient = algoliasearch(
    process.env.REACT_APP_algoliaAppKey,
    process.env.REACT_APP_algoliaAdminKey
  );
  const index = searchClient.initIndex(process.env.REACT_APP_algoliaIndexName);

  const result = await index.search(query);
};
