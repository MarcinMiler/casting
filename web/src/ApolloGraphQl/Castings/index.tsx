import gql from 'graphql-tag'

export const CastingsQuery = gql`
    query CastingsQuery {
        castings {
            id
            title
            description
            city
            startDate
            duration
        }
    }
`
