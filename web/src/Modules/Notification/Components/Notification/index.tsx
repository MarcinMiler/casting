import * as React from 'react'

import { Notification as NotificationType } from 'Modules/Notification/models'
import { Container, NotificationTitle } from './style'

interface Props {
    notification: NotificationType
    closeNotification: (id: string) => void
}

export const Notification: React.FC<Props> = ({
    notification,
    closeNotification
}) => (
    <Container>
        <NotificationTitle onClick={() => closeNotification(notification.id)}>
            {notification.title}
        </NotificationTitle>
    </Container>
)
