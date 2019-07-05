import * as React from 'react'

import { Notification as NotificationType } from 'Modules/Notification/models'
import { Notification } from '../Notification'

interface Props {
    notifications: NotificationType[]
    closeNotification: (id: string) => void
}

export const NotificationsList: React.FC<Props> = ({
    notifications,
    closeNotification
}) => (
    <>
        {notifications.map(notification => (
            <Notification
                key={notification.id}
                notification={notification}
                closeNotification={closeNotification}
            />
        ))}
    </>
)
