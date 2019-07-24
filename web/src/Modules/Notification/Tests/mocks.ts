import { createNotification } from '../factory'
import { NotificationTypes } from '../models'

export const testNotification = () =>
    createNotification({
        title: 'Test notification',
        description: '',
        type: NotificationTypes.INFO
    })
