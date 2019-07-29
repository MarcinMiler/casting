import * as yup from 'yup'

export const CreateCastingSchema = [
    yup.object().shape({
        title: yup
            .string()
            .min(5)
            .required(),
        description: yup
            .string()
            .min(5)
            .required(),
        startDate: yup.date().required(),
        duration: yup.string().required()
    }),
    yup.object().shape({
        city: yup
            .string()
            .min(2)
            .required(),
        lat: yup.number().required(),
        lng: yup.number().required()
    })
]

export const createCastingInitialState = {
    companyId: '1',
    title: '',
    description: '',
    city: '',
    lat: 0,
    lng: 0,
    startDate: '',
    duration: ''
}
