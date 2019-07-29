import gql from 'graphql-tag'

export const MyCompaniesQuery = gql`
    query MyCompaniesQuery {
        myCompanies {
            id
            name
            logo
            description
        }
    }
`
