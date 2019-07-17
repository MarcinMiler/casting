import { ApolloQueryResult } from 'apollo-boost'

export const apolloMock = <T>(data: T): ApolloQueryResult<T> => ({
    data: {
        ...data
    },
    networkStatus: 1,
    loading: false,
    stale: false
})
