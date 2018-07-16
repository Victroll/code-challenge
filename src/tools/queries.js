export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = id => {
  return `{
    article(id: "${id}") {
      author
      id
      title
      content
      published
      tags
    }
  }`;
};

export const DELETE_ARTICLE_QUERY = id => {
  return `mutation DeleteArticle {
      deleteArticle(id: "${id}") {
        id
      }
    }`;
};

export const UPDATE_ARTICLE_QUERY = (article) => {
  const art = Object.keys(article).map(attr => {
    // Remove carriage return from text
    if (typeof(article[attr]) === 'string') return `${attr}: "${article[attr].replace(/[\n\r]/g, '')}"`;
    // Formatting array
    if (typeof(article[attr]) === 'object') return `${attr}: [${article[attr].map(v => `"${v}"`)}]`;
    return `${attr}: ${article[attr]}`;
  }).join(',')
  return `mutation UpdateArticle {
    updateArticle(article: {${art}}){
      author
      id
      title
      content
      published
      tags
    }
  }`;
};

export const NEW_ARTICLE_QUERY = (article) => {
  delete article['id']; // Remove id
  const art = Object.keys(article).map(attr => {
    // Remove carriage return from text
    if (typeof(article[attr]) === 'string') return `${attr}: "${article[attr].replace(/[\n\r]/g, '')}"`;
    // Formatting array
    if (typeof(article[attr]) === 'object') return `${attr}: [${article[attr].map(v => `"${v}"`)}]`;
    return `${attr}: ${article[attr]}`;
  }).join(',')
  return `mutation CreateArticle {
    createArticle(article: {${art}}){
      author
      id
      title
      content
      published
      tags
    }
  }`;
};
