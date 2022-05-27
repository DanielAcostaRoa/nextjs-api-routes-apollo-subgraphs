import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useApollo } from "lib/apollo/client"
import { ApolloProvider } from "@apollo/client"

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
