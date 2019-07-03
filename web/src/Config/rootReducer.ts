import { combineReducers } from 'redux'

import { castingsReducer } from 'Modules/Casting/reducer'
import { authReducer } from 'Modules/Auth/reducer'

export const rootReducer = combineReducers({
    castings: castingsReducer,
    auth: authReducer
})
