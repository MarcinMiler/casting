import { GraphqlService } from 'Common/Services/graphqlService'
import { CastingsQuery } from 'ApolloGraphQl'

export class CastingService {
    constructor(private readonly graphqlService: GraphqlService) {}

    getCastings() {
        return this.graphqlService.query(CastingsQuery)
    }
}
