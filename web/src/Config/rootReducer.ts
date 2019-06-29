import { combineReducers } from 'redux'

import { castingsReducer } from 'Modules/Casting/reducer'

export const rootReducer = combineReducers({
    castings: castingsReducer
})
