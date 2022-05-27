import { gql } from "apollo-server-micro"

export const typeDefs = gql`
extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.0",
        import: ["@key", "@shareable"])

  type Product @key(fields: "sku") {
    sku: String!
    name: String!
    price: Int
  }
  type Query {
    topProducts: [Product]
    products: [Product]
    getProductBySku(sku: String!): Product
  }
`
