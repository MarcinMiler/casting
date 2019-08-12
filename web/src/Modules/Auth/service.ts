import { Observable } from 'rxjs'

import { GraphqlService } from 'Common/Services/Graphql'
import {
    MeQuery as MeQueryType,
    LoginMutation as LoginMutationType,
    LoginMutationVariables,
    RegisterMutation as RegisterMutationType,
    RegisterMutationVariables
} from 'GraphqlTypes'
import { MeQuery, LoginMutation, RegisterMutation } from 'GraphqlQueries'

export interface LoginResponse {
    data: {
        login: string
    }
}

export interface RegisterResponse {
    data: {
        register: boolean
    }
}

export class AuthService {
    constructor(private readonly graphqlService: GraphqlService) {}

    me() {
        return this.graphqlService.query<MeQueryType>(MeQuery)
    }

    login(variables: LoginMutationVariables): Observable<LoginResponse> {
        return this.graphqlService.mutation<
            LoginMutationType,
            LoginMutationVariables
        >(LoginMutation, variables)
    }

    register(
        variables: RegisterMutationVariables
    ): Observable<RegisterResponse> {
        return this.graphqlService.mutation<
            RegisterMutationType,
            RegisterMutationVariables
        >(RegisterMutation, variables)
    }

    saveToken(token: string) {
        localStorage.setItem('token', token)
    }
}
