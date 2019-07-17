import { combineEpics, Epic as _Epic } from 'redux-observable'

import { castingEpicFactory } from 'Modules/Casting/epic'
import { authEpicFactory } from 'Modules/Auth/epic'
import { notificationEpicFactory } from 'Modules/Notification/epic'
import { companyEpicFactory } from 'Modules/Company/epic'
import {
    castingService,
    authService,
    routingService,
    companyService
} from './rootService'
import { AppAction } from './rootAction'

export type Epic = _Epic<AppAction, AppAction>

export const rootEpic = combineEpics(
    castingEpicFactory(castingService, routingService),
    authEpicFactory(authService, routingService),
    notificationEpicFactory(),
    companyEpicFactory(companyService, routingService)
)
