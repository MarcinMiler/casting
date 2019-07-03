import { createReducer } from 'typesafe-actions'

import { CastingsQuery_castings } from 'GraphqlTypes'
import { AppAction } from 'Config/rootAction'
import * as actions from './actions'

export interface CastingState {
    castings: CastingsQuery_castings[]
}

export const defaultCastingState: CastingState = {
    castings: []
}

export const castingsReducer = createReducer<CastingState, AppAction>(
    defaultCastingState
)
    .handleAction(actions.GET_CASTINGS_SUCCEED, (state, action) => ({
        ...state,
        castings: action.payload.data.castings
            ? action.payload.data.castings
            : []
    }))
    .handleAction(actions.CREATE_CASTING_SUCCEED, (state, action) => ({
        ...state,
        castings: [...state.castings, action.payload]
    }))
