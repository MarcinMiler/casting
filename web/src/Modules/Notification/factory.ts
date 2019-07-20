import nanoid from 'nanoid'

import { CreateNotification, NotificationTypes } from './models'

export const createNotification = (notification: CreateNotification) => ({
    id: nanoid(),
    ...notification
})

export const formatGraphqlError = (err: Error) =>
    err.message.replace('GraphQL error: ', '')

export const loginNotificationFailed = (err: Error) =>
    createNotification({
        title: formatGraphqlError(err),
        description: '',
        type: NotificationTypes.FAILURE
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

export const registerNotificationFailed = (err: Error) =>
    createNotification({
        title: formatGraphqlError(err),
        description: '',
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

export const companyInfo = {
    title: 'Successfully created company',
    description: 'Now you can checkout your company'
}

export const createCompanyNotificationSucceed = () =>
    createNotification({
        ...companyInfo,
        type: NotificationTypes.SUCCEED
    })
