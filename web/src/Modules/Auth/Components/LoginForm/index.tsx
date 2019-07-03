import * as React from 'react'
import { Formik, Form, Field } from 'formik'

import { LoginInitialState, LoginSchema } from 'Modules/Auth/schema'
import { LoginMutationVariables } from 'GraphqlTypes/LoginMutation'
import { Input } from '../Input'
import {
    Title,
    SecondaryTitle,
    ButtonsWrapper,
    LoginButton,
    SignUpButton
} from './style'

interface Props {
    login: (variables: LoginMutationVariables) => void
}

export const LoginForm: React.FC<Props> = ({ login }) => (
    <Formik
        initialValues={LoginInitialState}
        validationSchema={LoginSchema}
        onSubmit={login}
    >
        <Form>
            <Title>Enter the top models world</Title>

            <SecondaryTitle>
                Welcome back, Please login to your account
            </SecondaryTitle>

            <Field
                name="email"
                label="Email"
                type="text"
                noBottomBorder
                component={Input}
            />
            <Field
                name="password"
                label="Password"
                type="password"
                component={Input}
            />

            <ButtonsWrapper>
                <LoginButton type="submit">Login</LoginButton>

                <SignUpButton>Sign Up</SignUpButton>
            </ButtonsWrapper>
        </Form>
    </Formik>
)
