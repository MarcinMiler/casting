import { ActionType } from 'typesafe-actions'

import * as castingActions from 'Modules/Casting/actions'
import * as authActions from 'Modules/Auth/actions'

const rootAction = {
    casting: castingActions,
    auth: authActions
}

export type AppAction = ActionType<typeof rootAction>
