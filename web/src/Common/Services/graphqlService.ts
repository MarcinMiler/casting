import { ApolloClient } from 'apollo-boost'

export class GraphqlService {
    constructor(private readonly graphqlClient: ApolloClient<any>) {}

    query(query: string) {
        return this.graphqlClient.query({ query })
    }

    mutation(mutation: string, variables = {}) {
        return this.graphqlClient.mutate({ mutation, variables })
    }
}
