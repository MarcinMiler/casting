import { createAsyncAction } from 'typesafe-actions'

import { LoginMutationVariables } from 'GraphqlTypes/LoginMutation'
import { RegisterMutationVariables } from 'GraphqlTypes/RegisterMutation'

export const loginAsync = createAsyncAction(
    'LOGIN_REQUEST',
    'LOGIN_SUCCEED',
    'LOGIN_FAILURE',
    'LOGIN_CANCEL'
)<LoginMutationVariables, string, undefined, string>()

export const registerAsync = createAsyncAction(
    'REGISTER_REQUEST',
    'REGISTER_SUCCEED',
    'REGISTER_FAILURE',
    'REGISTER_CANCEL'
)<RegisterMutationVariables, boolean, undefined, string>()
