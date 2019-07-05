import { createReducer } from 'typesafe-actions'

import { AppAction } from 'Config/rootAction'
import { Notification } from './models'
import * as actions from './actions'

export interface NotificationState {
    notifications: Notification[]
}

export const defaultNotificationState = {
    notifications: []
}

export const notificationReducer = createReducer<NotificationState, AppAction>(
    defaultNotificationState
)
    .handleAction(actions.showNotification, (state, action) => ({
        notifications: [...state.notifications, action.payload]
    }))
    .handleAction(actions.closeNotification, (state, action) => ({
        notifications: state.notifications.filter(
            notification => notification.id !== action.payload
        )
    }))
