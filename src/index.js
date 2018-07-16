import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/_reset.css';
import reducer from './reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './reducer/sagas';

const INIT_STATE = {
  articles: [],
  enlargedArticle: null,
};

const sagaMiddleware = createSagaMiddleware();

const STORE = createStore(
  reducer,
  INIT_STATE,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
