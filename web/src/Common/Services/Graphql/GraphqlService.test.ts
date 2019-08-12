import * as TypeMoq from 'typemoq'
import { ApolloClient, gql } from 'apollo-boost'

import { apolloMock } from 'Common/Mocks/apolloMock'
import { GraphqlService } from '.'

const mockQuery = gql`
    query QueryName($id: ID!) {
        name(id: $id) {
            test
        }
    }
`

const mockMutation = gql`
    mutation MutationName($id: ID!) {
        name(id: $id) {
            test
        }
    }
`

const mockVariables = { id: 1 }

const mockApolloQueryResponse = apolloMock({ name: { test: 'test' } })

const mockApolloMutationResponse = {
    data: {
        name: {
            test: 'test'
        }
    }
}

describe('Graphql Service', () => {
    it('should call query and get response', async done => {
        const mockApolloClient = TypeMoq.Mock.ofType<ApolloClient<{}>>()

        mockApolloClient
            .setup(x =>
                x.query(
                    TypeMoq.It.isObjectWith({
                        query: mockQuery,
                        variables: mockVariables
                    })
                )
            )
            .returns(() => Promise.resolve(mockApolloQueryResponse))
            .verifiable()

        const graphqlService = new GraphqlService(mockApolloClient.object)

        const response = graphqlService.query(mockQuery, mockVariables)

        response.subscribe(res => {
            expect(res).toEqual(mockApolloQueryResponse)
            mockApolloClient.verifyAll()

            done()
        })
    })

    it('should call mutation and get response', async done => {
        const mockApolloClient = TypeMoq.Mock.ofType<ApolloClient<{}>>()

        mockApolloClient
            .setup(x =>
                x.mutate(
                    TypeMoq.It.isObjectWith({
                        mutation: mockMutation,
                        variables: mockVariables
                    })
                )
            )
            .returns(() => Promise.resolve(mockApolloMutationResponse))
            .verifiable()

        const graphqlService = new GraphqlService(mockApolloClient.object)

        const response = graphqlService.mutation(mockMutation, mockVariables)

        response.subscribe(res => {
            expect(res).toEqual(mockApolloMutationResponse)
            mockApolloClient.verifyAll()

            done()
        })
    })
})
