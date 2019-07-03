import * as React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from 'Modules/Auth/Components/LoginForm'

import { loginAsync } from '../../actions'

type StateProps = typeof mapDispatchToProps

interface Props extends StateProps {
    switchForm: () => void
}

export const LoginFormContainerPure: React.FC<Props> = props => (
    <LoginForm {...props} />
)

const mapDispatchToProps = {
    login: loginAsync.request
}

export const LoginFormContainer = connect(
    null,
    mapDispatchToProps
)(LoginFormContainerPure)
