import * as yup from 'yup'

export const createCompanySchema = yup.object().shape({
    name: yup.string().required(),
    logo: yup.string().required(),
    description: yup.string().required()
})

export const createCompanyInitialState = {
    name: '',
    logo: '',
    description: ''
}
