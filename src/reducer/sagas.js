import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../tools/request';
import { ARTICLE_QUERY, DELETE_ARTICLE_QUERY, ARTICLES_QUERY, UPDATE_ARTICLE_QUERY, NEW_ARTICLE_QUERY } from '../tools/queries';
import * as TYPES from '../reducer/constants';

function* fetchArticle(action) {
  try {
    const query = ARTICLE_QUERY(action.id);
    const article = yield call(request, query);
    yield put({ type: TYPES.FETCH_ARTICLE_OK, article: article.data.article });
  } catch (e) {
    yield put({ type: TYPES.FETCH_ARTICLE_KO, message: e.message });
  }
}

function* deleteArticle(action) {
  try {
    const query = DELETE_ARTICLE_QUERY(action.id);
    yield call(request, query);
    yield put({ type: TYPES.DELETE_ARTICLE_OK });
    // Fetch all the articles
    const articles = yield call(request, ARTICLES_QUERY);
    yield put({ type: TYPES.SET_ARTICLES, articles: articles.data.articles });
  } catch (e) {
    yield put({ type: TYPES.DELETE_ARTICLE_KO });
  }
}

function* updateArticle(action) {
  try {
    const query = UPDATE_ARTICLE_QUERY(action.article);
    const result = yield call(request, query);
    yield put({ type: TYPES.UPDATE_ARTICLE_OK, article: result.data.updateArticle });
    // Fetch all the articles
    const articles = yield call(request, ARTICLES_QUERY);
    yield put({ type: TYPES.SET_ARTICLES, articles: articles.data.articles });
  } catch (e) {
    yield put({ type: TYPES.UPDATE_ARTICLE_KO });
  }
}

function* saveNewArticle(action) {
  try {
    const query = NEW_ARTICLE_QUERY(action.article);
    yield call(request, query);
    yield put({ type: TYPES.SAVE_NEW_ARTICLE_OK });
    // Fetch all the articles
    const articles = yield call(request, ARTICLES_QUERY);
    yield put({ type: TYPES.SET_ARTICLES, articles: articles.data.articles });
  } catch (e) {
    yield put({ type: TYPES.SAVE_NEW_ARTICLE_KO });
  }
}

export default function* mySaga() {
  yield takeLatest(TYPES.FETCH_ARTICLE, fetchArticle);
  yield takeLatest(TYPES.DELETE_ARTICLE, deleteArticle);
  yield takeLatest(TYPES.UPDATE_ARTICLE, updateArticle);
  yield takeLatest(TYPES.SAVE_NEW_ARTICLE, saveNewArticle);
}