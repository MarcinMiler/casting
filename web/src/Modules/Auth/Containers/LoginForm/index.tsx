import * as React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from 'Modules/Auth/Components/LoginForm'

import { loginRequest } from '../../actions'

type Props = typeof mapDispatchToProps

export const LoginFormContainerPure: React.FC<Props> = ({ loginRequest }) => (
    <LoginForm login={loginRequest} />
)

const mapDispatchToProps = {
    loginRequest
}

export const LoginFormContainer = connect(
    null,
    mapDispatchToProps
)(LoginFormContainerPure)
