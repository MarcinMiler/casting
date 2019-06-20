import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
    uri: 'https://casting-server.herokuapp.com/',
    request: async operation => {
        const token = localStorage.getItem('token')

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
})
