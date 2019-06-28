import { createReducer } from 'typesafe-actions'

import { AppAction } from 'ReduxConfig/rootAction'

import * as actions from './actions'

export interface CastingState {
    count: number
}

export const defaultCastingState = {
    count: 0
}

export const castingReducer = createReducer<CastingState, AppAction>(
    defaultCastingState
).handleAction(actions.pongAction, (state, action) => ({
    count: 1
}))
