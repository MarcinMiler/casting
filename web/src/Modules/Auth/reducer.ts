import { createReducer } from 'typesafe-actions'

import { AppAction } from 'Config/rootAction'
import { MeQuery_me } from 'GraphqlTypes'
import * as actions from './actions'

export interface AuthState {
    token: string
    user: MeQuery_me | null
    isUserLoading: boolean
}

export const defaultAuthState = {
    token: '',
    user: null,
    isUserLoading: true
}

export const authReducer = createReducer<AuthState, AppAction>(defaultAuthState)
    .handleAction(actions.loginAsync.success, (state, action) => ({
        ...state,
        token: action.payload
    }))
    .handleAction(actions.getMeAsync.success, (state, { payload }) => ({
        ...state,
        isUserLoading: false,
        user: payload.data.me
    }))
    .handleAction(actions.getMeAsync.failure, state => ({
        ...state,
        isUserLoading: false
    }))
