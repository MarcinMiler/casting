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

export const LoginInitialState = {
    email: '',
    password: ''
}
