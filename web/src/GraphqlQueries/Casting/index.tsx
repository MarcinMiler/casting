import gql from 'graphql-tag'

export const CastingQuery = gql`
    query CastingQuery($id: ID!) {
        casting(id: $id) {
            id
            companyId
            title
            description
            city
            lat
            lng
            startDate
            duration
            createdAt
        }
    }
`
