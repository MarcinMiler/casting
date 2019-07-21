import gql from 'graphql-tag'

export const MeQuery = gql`
    query MeQuery {
        me {
            id
            email
        }
    }
`
