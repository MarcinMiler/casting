import { createAction } from 'typesafe-actions'

import { LoginMutationVariables } from 'GraphqlTypes/LoginMutation'
import { RegisterMutationVariables } from 'GraphqlTypes/RegisterMutation'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const loginRequest = createAction(
    LOGIN_REQUEST,
    action => (payload: LoginMutationVariables) => action(payload)
)

export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const loginSucceed = createAction(
    LOGIN_SUCCEED,
    action => (payload: string) => action(payload)
)

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const registerRequest = createAction(
    REGISTER_REQUEST,
    action => (payload: RegisterMutationVariables) => action(payload)
)

export const REGISTER_SUCCEED = 'REGISTER_SUCCEED'
export const registerSucceed = createAction(
    REGISTER_SUCCEED,
    action => (payload: any) => action(payload)
)
