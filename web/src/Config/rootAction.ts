import { ActionType } from 'typesafe-actions'

import * as castingActions from 'Modules/Casting/actions'
import * as authActions from 'Modules/Auth/actions'
import * as notificationActions from 'Modules/Notification/actions'
import * as companyActions from 'Modules/Company/actions'

const rootAction = {
    casting: castingActions,
    auth: authActions,
    notification: notificationActions,
    company: companyActions
}

export type AppAction = ActionType<typeof rootAction>
