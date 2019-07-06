import { CastingState } from 'Modules/Casting/reducer'
import { NotificationState } from 'Modules/Notification/reducer'
import { AuthState } from 'Modules/Auth/reducer'

export interface AppState {
    castings: CastingState
    notifications: NotificationState
    auth: AuthState
}
