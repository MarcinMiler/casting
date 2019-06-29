import gql from 'graphql-tag'

export const CastingQuery = gql`
    query CastingQuery($id: ID!) {
        casting(id: $id) {
            id
            title
            description
            city
            startDate
            duration
        }
    }
`
