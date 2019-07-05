import { CastingState } from 'Modules/Casting/reducer'
import { NotificationState } from 'Modules/Notification/reducer'

export interface AppState {
    castings: CastingState
    notifications: NotificationState
}
