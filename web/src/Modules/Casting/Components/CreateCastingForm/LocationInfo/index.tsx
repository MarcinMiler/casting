import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'Components'
import { FormikMap } from '../FormikMap'
import { Container } from './style'

interface Props {}

export const LocationInfo: React.FC<Props> = () => (
    <>
        <Field name="city" label="City" type="text" component={FormikInput} />
        <Container>
            <Field component={FormikMap} />
        </Container>
    </>
)
