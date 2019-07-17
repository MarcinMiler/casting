import { createReducer } from 'typesafe-actions'

import { CastingsQuery_castings, CastingQuery_casting } from 'GraphqlTypes'
import { AppAction } from 'Config/rootAction'
import * as actions from './actions'

export interface CastingState {
    castings: CastingsQuery_castings[]
    casting: {
        [key: string]: CastingQuery_casting
    }
    isFetchingCastings: boolean
    isFetchingCasting: boolean
}

export const defaultCastingState: CastingState = {
    castings: [],
    casting: {},
    isFetchingCastings: false,
    isFetchingCasting: false
}

export const castingsReducer = createReducer<CastingState, AppAction>(
    defaultCastingState
)
    .handleAction(actions.getCastingsAsync.request, state => ({
        ...state,
        isFetchingCastings: true
    }))
    .handleAction(actions.getCastingsAsync.success, (state, { payload }) => ({
        ...state,
        isFetchingCastings: false,
        castings: payload.data.castings ? payload.data.castings : []
    }))
    .handleAction(
        actions.getMoreCastingsAsync.success,
        (state, { payload }) => ({
            ...state,
            castings: [...state.castings, ...payload.data.castings]
        })
    )
    .handleAction(actions.getCastingAsync.request, state => ({
        ...state,
        isFetchingCasting: true
    }))
    .handleAction(actions.getCastingAsync.success, (state, { payload }) => ({
        ...state,
        isFetchingCasting: false,
        casting: {
            [payload.data.casting.id]: payload.data.casting
        }
    }))
    .handleAction(actions.createCastingAsync.success, (state, { payload }) => ({
        ...state,
        castings: [...state.castings, payload]
    }))
