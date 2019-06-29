import { createReducer } from 'typesafe-actions'

import * as actions from './actions'
import { Casting } from './models'

export interface CastingState {
    castings: Casting[]
}

export const defaultCastingState = {
    castings: []
}

export const castingReducer = createReducer<CastingState, any>(
    defaultCastingState
).handleAction(actions.GET_CASTINGS_SUCCEED, (state: any, action: any) => ({
    ...state,
    ...action.payload.data
}))
