import { createReducer } from 'typesafe-actions'

import { CastingsQuery_castings, CastingQuery_casting } from 'GraphqlTypes'
import { AppAction } from 'Config/rootAction'
import * as actions from './actions'

export interface CastingState {
    castings: CastingsQuery_castings[]
    casting: {
        [key: string]: CastingQuery_casting
    }
}

export const defaultCastingState: CastingState = {
    castings: [],
    casting: {}
}

export const castingsReducer = createReducer<CastingState, AppAction>(
    defaultCastingState
)
    .handleAction(actions.getCastingsAsync.success, (state, action) => ({
        ...state,
        castings: action.payload.data.castings
            ? action.payload.data.castings
            : []
    }))
    .handleAction(actions.getCastingAsync.success, (state, action) => ({
        ...state,
        casting: {
            [action.payload.data.casting.id]: action.payload.data.casting
        }
    }))
    .handleAction(actions.createCastingAsync.success, (state, action) => ({
        ...state,
        castings: [...state.castings, action.payload]
    }))
