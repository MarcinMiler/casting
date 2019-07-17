import gql from 'graphql-tag'

export const CastingsQuery = gql`
    query CastingsQuery($cursor: String) {
        castings(cursor: $cursor) {
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
