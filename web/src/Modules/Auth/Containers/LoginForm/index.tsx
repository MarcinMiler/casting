import * as React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from 'Modules/Auth/Components/LoginForm'

import { loginRequest } from '../../actions'

type StateProps = typeof mapDispatchToProps

interface Props extends StateProps {
    switchForm: () => void
}

export const LoginFormContainerPure: React.FC<Props> = ({
    loginRequest,
    switchForm
}) => <LoginForm login={loginRequest} switchForm={switchForm} />

const mapDispatchToProps = {
    loginRequest
}

export const LoginFormContainer = connect(
    null,
    mapDispatchToProps
)(LoginFormContainerPure)
