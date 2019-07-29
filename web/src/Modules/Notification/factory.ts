import nanoid from 'nanoid'

import {
    CreateNotification as CreateNotificationType,
    NotificationTypes
} from './models'

export type CreateNotification = typeof createNotification

export const createNotification = (notification: CreateNotificationType) => ({
    id: nanoid(),
    ...notification
})

export const formatGraphqlError = (err: Error) =>
    err.message.replace('GraphQL error: ', '')
