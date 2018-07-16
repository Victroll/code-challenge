import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation query',
  fields: () => ({
    deleteArticle: {
      type: articleType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, input) {
        return db.Article.findById(input.id).remove().exec();
      },
    },
    updateArticle: {
      type: articleType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        author: {
          type: GraphQLString,
        },
        content: {
          type: GraphQLString,
        },
        tags: {
          type: new GraphQLList(GraphQLString),
        },
        title: {
          type: GraphQLString,
        },
      },
      resolve(_, input) {
        db.Article.update(
          { id: input.id },
          { $set: {
            author: input.author,
            content: input.content,
            title: input.title,
          },
          });
        return db.Article.findById(input.id);
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
