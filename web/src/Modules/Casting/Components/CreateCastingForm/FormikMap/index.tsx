import * as React from 'react'
import { FieldProps } from 'formik'
import { LeafletMouseEvent } from 'leaflet'

import { Map } from 'Components'

interface Props extends FieldProps {}

export const FormikMap: React.FC<Props> = ({ form: { setValues, values } }) => {
    const [position, setPosition] = React.useState({ lat: 0, lng: 0 })

    const setLocation = ({ latlng }: LeafletMouseEvent) => {
        setValues({
            ...values,
            ...latlng
        })

        setPosition({ ...latlng })
    }
    return <Map onClick={setLocation} markers={[position]} />
}
