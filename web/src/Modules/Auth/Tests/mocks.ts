import {
    LoginMutationVariables,
    RegisterMutationVariables,
    MeQuery
} from 'GraphqlTypes'
import { apolloMock } from 'Common/Mocks/apolloMock'
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

export const meMock = {
    id: 1,
    email: 'm@m.com'
}

export const apolloMeMockResponse = apolloMock<MeQuery>({
    me: meMock
})
