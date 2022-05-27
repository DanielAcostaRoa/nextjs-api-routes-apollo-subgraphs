import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type Product {
    sku: String!
    name: String!
    price: Int
  }

  type User {
    id: ID!
    username: String!
    email: String
  }

  type Query {
    topProducts: [Product]
    products: [Product]
    getProductBySku(sku: String!): Product
    me: User
    users: [User]
  }
`
