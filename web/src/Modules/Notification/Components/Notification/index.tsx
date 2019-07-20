import * as React from 'react'

import {
    Notification as NotificationType,
    NotificationTypes
} from 'Modules/Notification/models'
import { closeNotification } from 'Modules/Notification/actions'
import {
    Container,
    NotificationTitle,
    CheckIcon,
    WrapperIcon,
    CloseIcon,
    FailureIcon,
    Indicator
} from './style'

interface Props {
    notification: NotificationType
    closeNotification: typeof closeNotification
}

export const Notification: React.FC<Props> = ({
    notification,
    closeNotification
}) => (
    <Container>
        <Indicator type={notification.type} />
        <WrapperIcon>
            {notification.type === NotificationTypes.SUCCEED && <CheckIcon />}
            {notification.type === NotificationTypes.FAILURE && <FailureIcon />}
        </WrapperIcon>
        <NotificationTitle>{notification.title}</NotificationTitle>
        <CloseIcon onClick={() => closeNotification(notification.id)} />
    </Container>
)
