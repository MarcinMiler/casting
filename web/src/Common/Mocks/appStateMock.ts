import { AppState } from 'Config/appState'
import { defaultCastingState } from 'Modules/Casting/reducer'
import { defaultNotificationState } from 'Modules/Notification/reducer'
import { defaultAuthState } from 'Modules/Auth/reducer'

export const appStateMock: AppState = {
    castings: {
        ...defaultCastingState
    },
    notifications: {
        ...defaultNotificationState
    },
    auth: {
        ...defaultAuthState
    }
}
