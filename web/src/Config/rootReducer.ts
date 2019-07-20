import { combineReducers } from 'redux'

import { castingsReducer } from 'Modules/Casting/reducer'
import { authReducer } from 'Modules/Auth/reducer'
import { notificationReducer } from 'Modules/Notification/reducer'
import { companyReducer } from 'Modules/Company/reducer'

export const rootReducer = combineReducers({
    castings: castingsReducer,
    auth: authReducer,
    notifications: notificationReducer,
    company: companyReducer
})
