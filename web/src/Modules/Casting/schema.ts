import * as yup from 'yup'

export const CreateCastingSchema = yup.object().shape({
    title: yup
        .string()
        .min(5)
        .required(),
    description: yup
        .string()
        .min(5)
        .required(),
    city: yup
        .string()
        .min(2)
        .required(),
    startDate: yup.date().required(),
    duration: yup.string().required(),
    lat: yup.number(),
    lng: yup.number()
})

export const createCastingInitialState = {
    title: '',
    description: '',
    city: '',
    startDate: '',
    duration: '',
    companyId: 1
}
