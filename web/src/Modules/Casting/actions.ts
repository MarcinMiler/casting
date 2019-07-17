import { createAsyncAction } from 'typesafe-actions'
import { ApolloQueryResult } from 'apollo-boost'

import {
    CastingsQuery,
    CreateCastingMutationVariables,
    CastingQuery_casting,
    CastingQuery,
    CastingQueryVariables,
    CastingsQueryVariables
} from 'GraphqlTypes'

export const getCastingsAsync = createAsyncAction(
    'GET_CASTINGS_REQUEST',
    'GET_CASTINGS_SUCCEED',
    'GET_CASTINGS_FAILURE',
    'GET_CASTINGS_CANCEL'
)<undefined, ApolloQueryResult<CastingsQuery>, Error, string>()

export const getMoreCastingsAsync = createAsyncAction(
    'GET_MORE_CASTINGS_REQUEST',
    'GET_MORE_CASTINGS_SUCCEED',
    'GET_MORE_CASTINGS_FAILURE',
    'GET_MORE_CASTINGS_CANCEL'
)<CastingsQueryVariables, ApolloQueryResult<CastingsQuery>, Error, string>()

export const getCastingAsync = createAsyncAction(
    'GET_CASTING_REQUEST',
    'GET_CASTING_SUCCEED',
    'GET_CASTING_FAILURE',
    'GET_CASTING_CANCEL'
)<CastingQueryVariables, ApolloQueryResult<CastingQuery>, Error, string>()

export const createCastingAsync = createAsyncAction(
    'CREATE_CASTING_REQUEST',
    'CREATE_CASTING_SUCCEED',
    'CREATE_CASTING_FAILURE',
    'CREATE_CASTING_CANCEL'
)<CreateCastingMutationVariables, CastingQuery_casting, Error, string>()
