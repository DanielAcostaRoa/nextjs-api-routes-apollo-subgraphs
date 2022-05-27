import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  extend schema
      @link(url: "https://specs.apollo.dev/federation/v2.0",
            import: ["@key", "@shareable"])

  type User @key(fields: "id") {
    id: ID!
    username: String @shareable
    email: String
  }

  type Query {
    me: User
    users: [User]
  }
`
