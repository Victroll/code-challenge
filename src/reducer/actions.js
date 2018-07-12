import * as TYPES from './constants';

export function setArticles(articles) {
  return {
    type: TYPES.SET_ARTICLES,
    articles,
  };
}