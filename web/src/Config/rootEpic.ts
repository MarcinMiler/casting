import { combineEpics, Epic as _Epic } from 'redux-observable'

import { createNotification } from 'Modules/Notification/factory'
import { castingEpicFactory } from 'Modules/Casting/epic'
import { authEpicFactory } from 'Modules/Auth/epic'
import { notificationEpicFactory } from 'Modules/Notification/epic'
import { companyEpicFactory } from 'Modules/Company/epic'
import { authNotificationsFactory } from 'Modules/Auth/notifications'
import { castingNotificationsFactory } from 'Modules/Casting/notifications'
import {
    castingService,
    authService,
    routingService,
    companyService
} from './rootService'
import { AppAction } from './rootAction'

export type Epic = _Epic<AppAction, AppAction>

export const rootEpic = combineEpics(
    castingEpicFactory(
        castingService,
        routingService,
        castingNotificationsFactory(createNotification)
    ),
    authEpicFactory(
        authService,
        routingService,
        authNotificationsFactory(createNotification)
    ),
    notificationEpicFactory(),
    companyEpicFactory(companyService, routingService)
)
