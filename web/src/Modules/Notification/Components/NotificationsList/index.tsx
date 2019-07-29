import * as React from 'react'

import { Notification as NotificationType } from 'Modules/Notification/models'
import { closeNotification } from 'Modules/Notification/actions'
import { Notification } from '../Notification'

interface Props {
    notifications: NotificationType[]
    closeNotification: typeof closeNotification
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
