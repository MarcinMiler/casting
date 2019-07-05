export enum NotificationTypes {
    SUCCEED = 'SUCCEED',
    FAILURE = 'FAILURE',
    INFO = 'INFO'
}

export interface Notification {
    id: string
    title: string
    description: string
    type: NotificationTypes
}

export interface CreateNotification {
    title: string
    description: string
    type: NotificationTypes
}
