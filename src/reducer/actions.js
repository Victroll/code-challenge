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

export function changeMode() {
  return {
    type: TYPES.CHANGE_MODE,
  };
}

export function updateArticle(article) {
  return {
    type: TYPES.UPDATE_ARTICLE,
    article,
  };
}

export function writeNewArticle() {
  return {
    type: TYPES.WRITE_NEW_ARTICLE,
  };
}

export function saveNewArticle(article) {
  return {
    type: TYPES.SAVE_NEW_ARTICLE,
    article,
  };
}