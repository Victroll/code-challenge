import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/_reset.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';

const INIT_STATE = {
  articles: [],
};

const STORE = createStore(
  reducer,
  INIT_STATE,
);

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
