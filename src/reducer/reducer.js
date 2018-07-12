import * as TYPES from './constants';

export default function(state, action) {
  switch (action.type) {
    case TYPES.SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    default:
      return state;
  }
}