import * as React from 'react'
import { connect } from 'react-redux'

import { RegisterForm } from 'Modules/Auth/Components/RegisterForm'
import { registerAsync } from '../../actions'

type StateProps = typeof mapDispatchToProps

interface Props extends StateProps {
    switchForm: () => void
}

export const RegisterFormContainerPure: React.FC<Props> = props => (
    <RegisterForm {...props} />
)

const mapDispatchToProps = {
    register: registerAsync.request
}

export const RegisterFormContainer = connect(
    null,
    mapDispatchToProps
)(RegisterFormContainerPure)
