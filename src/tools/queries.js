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
