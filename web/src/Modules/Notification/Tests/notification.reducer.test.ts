import { notificationReducer, defaultNotificationState } from '../reducer'
import * as actions from '../actions'
import { testNotification } from './mocks'

describe('Notification reducer', () => {
    it('should save notification', () => {
        const notification = testNotification()

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
        const registerNotification = testNotification()
        const createCastingNotification = testNotification()

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
