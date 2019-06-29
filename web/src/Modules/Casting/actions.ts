import { createAction } from 'typesafe-actions'

import { Casting, CreateCasting } from './models'

export const GET_CASTINGS_REQUESTED = 'GET_CASTINGS_REQUESTED'
export const getCastingsRequest = createAction(
    GET_CASTINGS_REQUESTED,
    action => action
)

export const GET_CASTINGS_SUCCEED = 'GET_CASTINGS_SUCCEED'
export const getCastingsSucceed = createAction(
    GET_CASTINGS_SUCCEED,
    action => (payload: any) => action(payload)
)

export const GET_CASTINGS_FAILED = 'GET_CASTINGS_FAILED'
export const getCastingsFailed = createAction(
    GET_CASTINGS_FAILED,
    action => (payload: any) => action(payload)
)

export const CREATE_CASTING_REQUEST = 'CREATE_CASTING_REQUEST'
export const createCastingRequest = createAction(
    CREATE_CASTING_REQUEST,
    action => (payload: CreateCasting) => action(payload)
)

export const CREATE_CASTING_SUCCEED = 'CREATE_CASTING_SUCCEED'
export const createCastingSucceed = createAction(
    CREATE_CASTING_SUCCEED,
    action => (payload: any) => action(payload)
)
