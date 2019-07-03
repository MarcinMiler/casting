import * as React from 'react'
import { connect } from 'react-redux'

import { RegisterForm } from 'Modules/Auth/Components/RegisterForm'
import { registerRequest } from '../../actions'

type StateProps = typeof mapDispatchToProps

interface Props extends StateProps {
    switchForm: () => void
}

export const RegisterFormContainerPure: React.FC<Props> = ({
    registerRequest,
    switchForm
}) => <RegisterForm register={registerRequest} switchForm={switchForm} />

const mapDispatchToProps = {
    registerRequest
}

export const RegisterFormContainer = connect(
    null,
    mapDispatchToProps
)(RegisterFormContainerPure)
