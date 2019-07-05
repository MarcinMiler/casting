import { LoginMutationVariables, RegisterMutationVariables } from 'GraphqlTypes'
import { LoginResponse, RegisterResponse } from '../service'

export const mockLoginVariables: LoginMutationVariables = {
    email: 'm@m.com',
    password: 'mmmm'
}

export const mockLoginResponse: LoginResponse = {
    data: {
        login: 'token'
    }
}

export const mockRegisterVariables: RegisterMutationVariables = {
    email: 'm@m.com',
    password: 'mmmm'
}

export const mockRegisterResponse: RegisterResponse = {
    data: {
        register: true
    }
}
