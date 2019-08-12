import ApolloClient from 'apollo-boost'

export const client = new ApolloClient<{}>({
    uri:
        process.env.NODE_ENV === 'production'
            ? 'https://casting-server.herokuapp.com/'
            : 'http://localhost:4000/',
    request: async operation => {
        const token = localStorage.getItem('token')

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    onError: ({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            console.log(graphQLErrors, networkError, 'graphql error')
        }
    }
})
