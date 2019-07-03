import { createAction } from 'typesafe-actions'

import { LoginMutationVariables } from 'GraphqlTypes/LoginMutation'

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
