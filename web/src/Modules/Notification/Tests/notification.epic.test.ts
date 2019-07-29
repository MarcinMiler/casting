import { StateObservable, ActionsObservable } from 'redux-observable'
import { Subject, of } from 'rxjs'

import { createNotification } from '../factory'
import { notificationEpicFactory } from '../epic'
import * as actions from '../actions'
import { NotificationTypes } from '../models'

describe('Notification epic', () => {
    const mockState = new StateObservable(new Subject(), {})

    const testNotification = createNotification({
        title: 'Test notification',
        description: '',
        type: NotificationTypes.INFO
    })

    it('should show and close notification', done => {
        // I'll refactor this test to using rxjs TestScheduler later
        jest.setTimeout(10000)
        const action$ = of(actions.showNotification(testNotification))

        const notificationEpicFactoryInstance = notificationEpicFactory()

        notificationEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.closeNotification(testNotification.id))

            done()
        })
    })
})
