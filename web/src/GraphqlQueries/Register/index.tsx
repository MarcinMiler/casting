import gql from 'graphql-tag'

export const RegisterMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
        register(input: { email: $email, password: $password })
    }
`
