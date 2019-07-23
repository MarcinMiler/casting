import {
    LoginMutationVariables,
    RegisterMutationVariables,
    MeQuery
} from 'GraphqlTypes'
import { apolloMock } from 'Common/Mocks/apolloMock'
import { LoginResponse, RegisterResponse } from '../service'
import { authNotificationsFactory } from '../notifications'

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

const mockNotificationFactory = authNotificationsFactory()

export const mockLoginFailedNotification = mockNotificationFactory.loginNotificationFailed(
    new Error('Invalid credentials')
)

export const mockRegisterSucceedNotification = mockNotificationFactory.registerNotificationSucceed()

export const mockRegisterFailedNotification = mockNotificationFactory.registerNotificationFailed(
    new Error('Registration Failed')
)

export const mockNotAuthenticatedNotification = mockNotificationFactory.notAuthenticatedNotification()
