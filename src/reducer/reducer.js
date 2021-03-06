import * as TYPES from './constants';

export default function(state, action) {
  switch (action.type) {
    case TYPES.SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    case TYPES.WRITE_NEW_ARTICLE:
      return {
        ...state,
        showArticle: true,
        editMode: true,
        enlargedArticle: {
          id: '', // Indicates a new article
          author: 'Tu nombre',
          title: 'Título',
          content: 'Contenido',
          published: false,
          tags: ['Tus Tags'],
        }
      };
    case TYPES.FETCH_ARTICLE_OK:
      return {
        ...state,
        enlargedArticle: action.article,
        showArticle: true,
      };
    case TYPES.UPDATE_ARTICLE_OK:
      return {
        ...state,
        enlargedArticle: action.article,
        editMode: false,
      };
    case TYPES.SAVE_NEW_ARTICLE_OK:
    case TYPES.DELETE_ARTICLE_OK:
    case TYPES.HIDE_ARTICLE:
      return {
        ...state,
        enlargedArticle: null,
        showArticle: false,
        editMode: false,
      };
    case TYPES.CHANGE_MODE:
      return {
        ...state,
        editMode: !state.editMode,
      };
    default:
      return state;
  }
}