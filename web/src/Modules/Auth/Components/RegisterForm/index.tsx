import * as React from 'react'
import { Field, Formik, Form } from 'formik'

import { RegisterMutationVariables } from 'GraphqlTypes/RegisterMutation'
import { RegisterInitialState, RegisterSchema } from 'Modules/Auth/schema'
import {
    Title,
    SecondaryTitle,
    ButtonsWrapper,
    LoginButton,
    SignUpButton
} from '../LoginForm/style'
import { Input } from '../Input'

interface Props {
    register: (variables: RegisterMutationVariables) => void
    switchForm: () => void
}

export const RegisterForm: React.FC<Props> = ({ register, switchForm }) => (
    <Formik
        initialValues={RegisterInitialState}
        validationSchema={RegisterSchema}
        onSubmit={register}
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
                noBorderBottom
                component={Input}
            />

            <Field
                name="password"
                label="Password"
                type="password"
                noBorderBottom
                component={Input}
            />

            <Field
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                component={Input}
            />

            <ButtonsWrapper>
                <LoginButton type="submit">Register</LoginButton>

                <SignUpButton onClick={switchForm}>Login</SignUpButton>
            </ButtonsWrapper>
        </Form>
    </Formik>
)
