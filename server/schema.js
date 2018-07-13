import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
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
  fields: {
    articles: () => ({
      articles: {
        type: new GraphQLList(articleType),
        resolve() {
          return db.Article.find();
        },
      },
    }),
    article: (id) => ({
      article: {
        type: new GraphQLObjectType(articleType),
        resolve() {
          return db.Article.find({ id });
        },
      },
    }),
  },
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
