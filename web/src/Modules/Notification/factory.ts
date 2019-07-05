import nanoid from 'nanoid'

import { CreateNotification, NotificationTypes } from './models'

export const createNotification = (notification: CreateNotification) => ({
    id: nanoid(),
    ...notification
})

const registerInfo = {
    title: 'Successfully registered',
    description: 'Now you can login'
}
export const registerNotificationSucceed = () =>
    createNotification({
        ...registerInfo,
        type: NotificationTypes.SUCCEED
    })
export const registerNotificationFailed = () =>
    createNotification({
        ...registerInfo,
        type: NotificationTypes.FAILURE
    })

const castingInfo = {
    title: 'Successfully created casting',
    description: 'Now you can checkout your casting'
}

export const createCastingNotificationSucceed = () =>
    createNotification({
        ...castingInfo,
        type: NotificationTypes.SUCCEED
    })
