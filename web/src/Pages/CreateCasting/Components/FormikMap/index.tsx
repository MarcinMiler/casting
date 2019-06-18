import * as React from 'react'
import { FieldProps } from 'formik'

import { Map } from 'Components'

interface Props extends FieldProps {}

export const FormikMap: React.FC<Props> = ({ form: { setValues, values } }) => {
    const setLocation = (e: any) => {
        const { lat, lng } = e.latlng

        setValues({
            ...values,
            lat,
            lng
        })
    }
    return <Map onClick={setLocation} />
}
