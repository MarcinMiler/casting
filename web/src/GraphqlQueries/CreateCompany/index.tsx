import gql from 'graphql-tag'

export const CreateCompanyMutation = gql`
    mutation CreateCompanyMutation(
        $name: String!
        $logo: String!
        $description: String!
    ) {
        createCompany(
            input: { name: $name, logo: $logo, description: $description }
        ) {
            id
            name
            logo
            description
        }
    }
`
