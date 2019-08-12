import { Observable } from 'rxjs'
import { GraphqlService } from 'Common/Services/Graphql'
import {
    CastingsQuery,
    CreateCastingMutation,
    CastingQuery
} from 'GraphqlQueries'
import {
    CastingsQuery as CastingsQueryType,
    CreateCastingMutation as CreateCastingMutationType,
    CastingQuery as CastingQueryType,
    CreateCastingMutationVariables,
    CastingQuery_casting,
    CastingQueryVariables,
    CastingsQueryVariables
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

    getMoreCastings(variables: CastingsQueryVariables) {
        return this.graphqlService.query<CastingsQueryType>(
            CastingsQuery,
            variables
        )
    }

    getCasting(variables: CastingQueryVariables) {
        return this.graphqlService.query<
            CastingQueryType,
            CastingQueryVariables
        >(CastingQuery, variables)
    }

    createCasting(
        variables: CreateCastingMutationVariables
    ): Observable<CreateCastingResponse> {
        return this.graphqlService.mutation<
            CreateCastingMutationType,
            CreateCastingMutationVariables
        >(CreateCastingMutation, variables)
    }
}
