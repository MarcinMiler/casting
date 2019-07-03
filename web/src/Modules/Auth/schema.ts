import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(4)
        .required()
})

export const RegisterSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(4)
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .min(4)
        .required()
})

export const LoginInitialState = {
    email: '',
    password: ''
}

export const RegisterInitialState = {
    ...LoginInitialState,
    confirmPassword: ''
}
