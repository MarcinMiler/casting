import { notificationReducer, defaultNotificationState } from '../reducer'
import {
    registerNotificationSucceed,
    createCastingNotificationSucceed
} from '../factory'
import * as actions from '../actions'

describe('Notification reducer', () => {
    it('should save notification', () => {
        const notification = registerNotificationSucceed()

        expect(
            notificationReducer(
                defaultNotificationState,
                actions.showNotification(notification)
            )
        ).toEqual({
            notifications: [notification]
        })
    })

    it('should remove notification', () => {
        const registerNotification = registerNotificationSucceed()
        const createCastingNotification = createCastingNotificationSucceed()
        const state = {
            notifications: [registerNotification, createCastingNotification]
        }

        expect(
            notificationReducer(
                state,
                actions.closeNotification(registerNotification.id)
            )
        ).toEqual({
            notifications: [createCastingNotification]
        })
    })
})
