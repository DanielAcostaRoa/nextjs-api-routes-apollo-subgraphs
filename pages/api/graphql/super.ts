import { NextApiRequest, NextApiResponse } from "next"
import { typeDefs, resolvers, service } from "lib/graph/super"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { ApolloServer } from "apollo-server-micro"

const apolloServer = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
})
const start = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  if (req.method === "OPTIONS") {
    res.end()
    return false
  }
  await start
  return apolloServer.createHandler({
    path: `/api/graphql/${service}`,
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
