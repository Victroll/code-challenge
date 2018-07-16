import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../tools/request';
import { ARTICLE_QUERY } from '../tools/queries';
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

export default function* mySaga() {
  yield takeLatest(TYPES.FETCH_ARTICLE, fetchArticle);
}