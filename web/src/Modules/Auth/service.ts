import { GraphqlService } from 'Common/Services/graphqlService'
import {
    LoginMutation as LoginMutationType,
    LoginMutationVariables
} from 'GraphqlTypes'
import { LoginMutation } from 'GraphqlQueries'

interface LoginResponse {
    data: {
        login: string
    }
}

export class AuthService {
    constructor(private readonly graphqlService: GraphqlService) {}

    login(variables: LoginMutationVariables): Promise<LoginResponse> {
        return this.graphqlService.mutation<
            LoginMutationType,
            LoginMutationVariables
        >(LoginMutation, variables)
    }
}
