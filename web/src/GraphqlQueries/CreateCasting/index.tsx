import gql from 'graphql-tag'

export const CreateCastingMutation = gql`
    mutation CreateCastingMutation(
        $companyId: ID!
        $title: String!
        $description: String!
        $city: String!
        $startDate: String!
        $duration: String!
    ) {
        createCasting(
            input: {
                companyId: $companyId
                title: $title
                description: $description
                city: $city
                startDate: $startDate
                duration: $duration
            }
        ) {
            id
            title
            description
            city
            startDate
            duration
        }
    }
`
