import { GraphqlService } from 'Common/Services/graphqlService'
import { CastingsQuery, CreateCastingMutation } from 'GraphqlQueries'

export class CastingService {
    constructor(private readonly graphqlService: GraphqlService) {}

    getCastings() {
        return this.graphqlService.query(CastingsQuery)
    }

    createCasting(variables: object) {
        return this.graphqlService.mutation(CreateCastingMutation, variables)
    }
}
