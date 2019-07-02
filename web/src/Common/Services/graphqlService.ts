import { ApolloClient } from 'apollo-boost'

export class GraphqlService {
    constructor(private readonly graphqlClient: ApolloClient<any>) {}

    query<Query, Variables = {}>(query: string, variables?: Variables) {
        return this.graphqlClient.query<Query, Variables>({ query, variables })
    }

    mutation<Mutation, Variables = {}>(
        mutation: string,
        variables?: Variables
    ) {
        return this.graphqlClient.mutate<Mutation, Variables>({
            mutation,
            variables
        })
    }
}
