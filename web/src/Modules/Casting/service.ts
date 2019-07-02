import { GraphqlService } from 'Common/Services/graphqlService'
import { CastingsQuery, CreateCastingMutation } from 'GraphqlQueries'
import {
    CastingsQuery as CastingsQueryType,
    CreateCastingMutation as CreateCastingMutationType,
    CreateCastingMutationVariables,
    CastingQuery_casting
} from 'GraphqlTypes'

export interface CreateCastingResponse {
    data: {
        createCasting: CastingQuery_casting
    }
}

export class CastingService {
    constructor(private readonly graphqlService: GraphqlService) {}

    getCastings() {
        return this.graphqlService.query<CastingsQueryType>(CastingsQuery)
    }

    createCasting(
        variables: CreateCastingMutationVariables
    ): Promise<CreateCastingResponse> {
        return this.graphqlService.mutation<
            CreateCastingMutationType,
            CreateCastingMutationVariables
        >(CreateCastingMutation, variables)
    }
}
