import { createReducer } from 'typesafe-actions'

import * as actions from './actions'
import { Casting } from './models'

export interface CastingState {
    castings: Casting[]
}

export const defaultCastingState = {
    castings: []
}

export const castingsReducer = createReducer<CastingState, any>(
    defaultCastingState
)
    .handleAction(actions.GET_CASTINGS_SUCCEED, (state: any, action: any) => ({
        ...state,
        ...action.payload.data
    }))
    .handleAction(
        actions.CREATE_CASTING_SUCCEED,
        (state: any, action: any) => ({
            ...state,
            castings: [...state.castings, action.payload.data.createCasting]
        })
    )
