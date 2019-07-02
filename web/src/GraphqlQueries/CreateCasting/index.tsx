import gql from 'graphql-tag'

export const CreateCastingMutation = gql`
    mutation CreateCastingMutation(
        $companyId: ID!
        $title: String!
        $description: String!
        $city: String!
        $lat: Float!
        $lng: Float!
        $startDate: String!
        $duration: String!
    ) {
        createCasting(
            input: {
                companyId: $companyId
                title: $title
                description: $description
                city: $city
                lat: $lat
                lng: $lng
                startDate: $startDate
                duration: $duration
            }
        ) {
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
