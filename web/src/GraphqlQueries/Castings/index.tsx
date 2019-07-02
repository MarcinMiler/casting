import gql from 'graphql-tag'

export const CastingsQuery = gql`
    query CastingsQuery {
        castings {
            id
            companyId
            title
            description
            city
            lat
            lng
            startDate
            duration
        }
    }
`
