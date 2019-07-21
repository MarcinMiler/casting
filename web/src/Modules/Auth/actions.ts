import { createAsyncAction } from 'typesafe-actions'

import { LoginMutationVariables } from 'GraphqlTypes/LoginMutation'
import { RegisterMutationVariables } from 'GraphqlTypes/RegisterMutation'
import { MeQuery } from 'GraphqlTypes'
import { ApolloQueryResult } from 'apollo-boost'

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

export const getMeAsync = createAsyncAction(
    'GET_ME_REQUEST',
    'GET_ME_SUCCEED',
    'GET_ME_FAILURE'
)<undefined, ApolloQueryResult<MeQuery>, undefined>()
