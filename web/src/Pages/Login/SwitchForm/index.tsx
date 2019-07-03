import * as React from 'react'
import { LoginFormContainer } from 'Modules/Auth/Containers/LoginForm'
import { RegisterFormContainer } from 'Modules/Auth/Containers/RegisterForm'

enum CurrentForm {
    Login,
    Register
}

export const SwitchForm: React.FC = () => {
    const [currentForm, setForm] = React.useState(CurrentForm.Login)

    return currentForm === CurrentForm.Login ? (
        <LoginFormContainer switchForm={() => setForm(CurrentForm.Register)} />
    ) : (
        <RegisterFormContainer switchForm={() => setForm(CurrentForm.Login)} />
    )
}
