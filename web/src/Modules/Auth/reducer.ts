import { createReducer } from 'typesafe-actions'

import { AppAction } from 'Config/rootAction'
import * as actions from './actions'

interface AuthState {
    token: string
}

const defaultAuthState = {
    token: ''
}

export const authReducer = createReducer<AuthState, AppAction>(
    defaultAuthState
).handleAction(actions.LOGIN_SUCCEED, (state, action) => ({
    ...state,
    token: action.payload
}))
