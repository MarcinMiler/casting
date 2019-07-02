import { createReducer } from 'typesafe-actions'

import { CastingQuery_casting } from 'GraphqlTypes'
import * as actions from './actions'

export interface CastingState {
    castings: CastingQuery_casting[]
}

export const defaultCastingState: CastingState = {
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
            castings: [...state.castings, action.payload]
        })
    )
