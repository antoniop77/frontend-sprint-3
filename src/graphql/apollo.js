import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from "apollo-link-error"
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    uri: 'http://127.0.0.1:8000/graphql/'
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const apolloClient = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
})

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})
