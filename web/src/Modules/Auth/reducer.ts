import { createReducer } from 'typesafe-actions'

import { AppAction } from 'Config/rootAction'
import * as actions from './actions'

export interface AuthState {
    token: string
}

export const defaultAuthState = {
    token: ''
}

export const authReducer = createReducer<AuthState, AppAction>(
    defaultAuthState
).handleAction(actions.loginAsync.success, (state, action) => ({
    ...state,
    token: action.payload
}))
