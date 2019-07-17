import { appStateMock } from 'Common/Mocks/appStateMock'
import { getNotifications } from '../selectors'
import { registerNotificationSucceed } from '../factory'

const registerNotification = registerNotificationSucceed()

describe('Notification selectors', () => {
    it('should return notifications', () => {
        const appState = {
            ...appStateMock,
            notifications: {
                notifications: [registerNotification]
            }
        }

        expect(getNotifications(appState)).toEqual([registerNotification])
    })
})
