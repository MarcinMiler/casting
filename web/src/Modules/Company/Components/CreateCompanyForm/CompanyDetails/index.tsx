import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'Components'

export const CompanyDetails: React.FC = () => (
    <>
        <Field
            name="name"
            label="Company Name"
            type="text"
            component={FormikInput}
        />

        <Field name="logo" label="Logo" type="text" component={FormikInput} />

        <Field
            name="description"
            label="Description"
            type="text"
            component={FormikInput}
        />
    </>
)
