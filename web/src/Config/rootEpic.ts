import { combineEpics, Epic as _Epic } from 'redux-observable'

import { castingEpicFactory } from 'Modules/Casting/epic'
import { authEpicFactory } from 'Modules/Auth/epic'
import { castingService, authService } from './rootService'
import { AppAction } from './rootAction'

export type Epic = _Epic<AppAction, AppAction>

export const rootEpic = combineEpics(
    castingEpicFactory(castingService),
    authEpicFactory(authService)
)
