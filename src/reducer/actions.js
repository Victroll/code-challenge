import * as TYPES from './constants';

export function setArticles(articles) {
  return {
    type: TYPES.SET_ARTICLES,
    articles,
  };
}

export function fetchArticle(id) {
  return {
    type: TYPES.FETCH_ARTICLE,
    id,
  };
}

export function hideArticle() {
  return {
    type: TYPES.HIDE_ARTICLE,
  };
}

export function deleteArticle(id) {
  return {
    type: TYPES.DELETE_ARTICLE,
    id,
  };
}