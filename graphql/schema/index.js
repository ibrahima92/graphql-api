const { buildSchema } = require('graphql')


module.exports = buildSchema(`

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }
  
  
  input ArticleInput {
    title: String!
    body: String!
  }
  
  type Query {
    articles:[Article!]
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)