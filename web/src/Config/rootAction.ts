import { ActionType } from 'typesafe-actions'

import * as castingActions from 'Modules/Casting/actions'
import * as authActions from 'Modules/Auth/actions'
import * as notificationActions from 'Modules/Notification/actions'

const rootAction = {
    casting: castingActions,
    auth: authActions,
    notification: notificationActions
}

export type AppAction = ActionType<typeof rootAction>
