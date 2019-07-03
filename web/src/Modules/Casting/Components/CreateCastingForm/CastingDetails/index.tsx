import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'Components'

interface Props {}

export const CastingDetails: React.FC<Props> = () => (
    <>
        <Field name="title" label="Title" type="text" component={FormikInput} />

        <Field
            name="description"
            label="Description"
            type="text"
            component={FormikInput}
        />

        <Field
            name="startDate"
            label="Start Date"
            type="text"
            component={FormikInput}
        />

        <Field
            name="duration"
            label="Duration"
            type="text"
            component={FormikInput}
        />
    </>
)
