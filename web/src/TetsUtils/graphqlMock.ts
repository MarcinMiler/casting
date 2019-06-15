interface GraphqlMock {
    query: any
    data: any
    variables?: object
}

export const graphqlMock = ({ query, data, variables = {} }: GraphqlMock) => [
    {
        request: {
            query,
            variables
        },
        result: {
            data
        }
    }
]
