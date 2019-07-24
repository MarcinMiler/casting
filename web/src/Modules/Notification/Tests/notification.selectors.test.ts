import { appStateMock } from 'Common/Mocks/appStateMock'
import { getNotifications } from '../selectors'
import { testNotification } from './mocks'

describe('Notification selectors', () => {
    it('should return notifications', () => {
        const notification = testNotification()
        const appState = {
            ...appStateMock,
            notifications: {
                notifications: [notification]
            }
        }

        expect(getNotifications(appState)).toEqual([notification])
    })
})
