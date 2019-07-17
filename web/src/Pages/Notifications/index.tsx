import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { NotificationContainer } from 'Modules/Notification/Containers/Notifications'
import { NotificationsWrapper } from 'Components/NotificationsWrapper'

const root = document.getElementById('notifications-root')

export const Notifications: React.FC = () => {
    return ReactDOM.createPortal(
        <NotificationsWrapper>
            <NotificationContainer />
        </NotificationsWrapper>,
        root as HTMLElement
    )
}
