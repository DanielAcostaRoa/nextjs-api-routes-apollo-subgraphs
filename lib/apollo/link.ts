import { HttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import { setContext } from "@apollo/client/link/context"
import { ApolloLink } from "@apollo/client"
import { getToken } from "../utils/getToken"
import process from 'process';

export const authLink = setContext(async (req, { headers }) => {
  let token = await getToken()
  return {
    headers: {
      authorization: `Bearer ${token}`,
      ...headers,
    },
  }
})

const customLink = new ApolloLink((operation, forward) => {
  let ctx = operation.getContext()
  let service = ctx.service ? ctx.service : "super"
  operation.setContext({ uri: `${process.env.NEXT_PUBLIC_URL}/api/graphql/${service}` })
  return forward(operation)
})

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const httpLink = new HttpLink({
  credentials: "include",
})

export const getLink = () => {
  return from([customLink, authLink, errorLink, httpLink])
}
