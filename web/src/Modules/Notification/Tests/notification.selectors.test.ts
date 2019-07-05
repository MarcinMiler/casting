import { AppState } from 'Config/appState'
import { getNotifications } from '../selectors'

describe('Notification selectors', () => {
    it('should return notifications', () => {
        const state: AppState = {
            castings: {
                castings: []
            },
            notifications: {
                notifications: []
            }
        }

        expect(getNotifications(state)).toEqual([])
    })
})
