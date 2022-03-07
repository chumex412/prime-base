import {HttpLink, InMemoryCache, ApolloClient, from} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink =  onError(({ graphQLErrors, networkError }) => {
  if(graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.error(`Graphql error, message: ${message}, Location: ${locations}, Path: ${path}`))
  }

  if(networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const htttpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })

const link = from([errorLink, htttpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default client;