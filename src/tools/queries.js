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
      title
      content
    }
  }`;
};
