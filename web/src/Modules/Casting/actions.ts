import { createAction } from 'typesafe-actions'

export const GET_CASTINGS_REQUESTED = 'GET_CASTINGS_REQUESTED'
export const getCastingsRequested = createAction(
    GET_CASTINGS_REQUESTED,
    action => (payload: any) => action(payload)
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
