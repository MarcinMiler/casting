import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Config/appState'
import { NotificationsList } from '../../Components/NotificationsList'
import { getNotifications } from '../../selectors'
import { closeNotification } from '../../actions'

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>

export const NotificationContainerPure: React.FC<Props> = props => (
    <NotificationsList {...props} />
)

const mapDispatchToProps = {
    closeNotification
}

const mapStateToProps = (state: AppState) => ({
    notifications: getNotifications(state)
})

export const NotificationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationContainerPure)
