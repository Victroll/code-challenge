import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find({});
      },
    },
    article: {
      type: articleType,
      args: { id: { type: GraphQLString } },
      resolve(_, input) {
        return db.Article.findById(input.id);
      },
    },
  }),
});

const ArticleInputType = new GraphQLInputObjectType({
  name: 'ArticleInputType',
  fields: () => ({
    id: { 
      type: GraphQLString
    },
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation query',
  fields: () => ({
    deleteArticle: {
      type: articleType,
      description: 'Delete an article by id',
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, input) {
        return db.Article.findById(input.id).remove().exec();
      },
    },
    createArticle: {
      type: articleType,
      description: 'Create a new Article',
      args: {
        article: { type: ArticleInputType },
      },
      resolve(_, { article }) {
        return db.Article.create({
          author: article.author,
          content: article.content,
          excerpt: article.content.slice(0, 350),
          tags: article.tags,
          title: article.title,
          published: false
        });
      }
    },
    updateArticle: {
      type: articleType,
      description: 'Update an article',
      args: {
        article: { type: ArticleInputType },
      },
      resolve(_, { article }) {
        return db.Article.findByIdAndUpdate(
          article.id,
          { $set: {
            author: article.author,
            content: article.content,
            excerpt: article.content.slice(0, 350),
            title: article.title,
            tags: article.tags,
            },
          },
          { new: true },
        );
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
