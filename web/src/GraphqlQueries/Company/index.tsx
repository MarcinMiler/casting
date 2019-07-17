import gql from 'graphql-tag'

export const CompanyQuery = gql`
    query CompanyQuery($id: ID!) {
        company(id: $id) {
            id
            name
            logo
            description
        }
    }
`
