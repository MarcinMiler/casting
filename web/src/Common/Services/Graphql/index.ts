import { ApolloClient } from 'apollo-boost'
import { from } from 'rxjs'

export class GraphqlService {
    constructor(private readonly graphqlClient: ApolloClient<{}>) {}

    query<Query, Variables = {}>(query: string, variables?: Variables) {
        return from(
            this.graphqlClient.query<Query, Variables>({ query, variables })
        )
    }

    mutation<Mutation, Variables = {}>(
        mutation: string,
        variables?: Variables
    ) {
        return from(
            this.graphqlClient.mutate<Mutation, Variables>({
                mutation,
                variables
            })
        )
    }
}
