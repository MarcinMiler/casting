import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { MockLink } from 'apollo-link-mock'

export const createClient = (mocks: any) =>
    new ApolloClient({
        cache: new InMemoryCache({ addTypename: false }),
        link: new MockLink(mocks)
    })
