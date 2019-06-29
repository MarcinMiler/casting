import { ActionType } from 'typesafe-actions'

import * as castingActions from 'Modules/Casting/actions'

const rootAction = {
    casting: castingActions
}

export type AppAction = ActionType<typeof rootAction>
