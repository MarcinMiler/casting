import { GraphqlService } from 'Common/Services/graphqlService'
import {
    LoginMutation as LoginMutationType,
    LoginMutationVariables,
    RegisterMutation as RegisterMutationType,
    RegisterMutationVariables
} from 'GraphqlTypes'
import { LoginMutation, RegisterMutation } from 'GraphqlQueries'

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

    login(variables: LoginMutationVariables): Promise<LoginResponse> {
        return this.graphqlService.mutation<
            LoginMutationType,
            LoginMutationVariables
        >(LoginMutation, variables)
    }

    register(variables: RegisterMutationVariables): Promise<RegisterResponse> {
        return this.graphqlService.mutation<
            RegisterMutationType,
            RegisterMutationVariables
        >(RegisterMutation, variables)
    }

    saveToken(token: string) {
        localStorage.setItem('token', token)
    }
}
