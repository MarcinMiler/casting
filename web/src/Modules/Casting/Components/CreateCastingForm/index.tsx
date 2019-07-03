import * as React from 'react'
import { Formik, Form } from 'formik'

import {
    CreateCastingSchema,
    createCastingInitialState
} from 'Modules/Casting/schema'
import { CreateCastingMutationVariables } from 'GraphqlTypes/CreateCastingMutation'
import { useWizard } from 'Hooks'
import { WizardForm } from 'Components'
import { CastingDetails } from './CastingDetails'
import { LocationInfo } from './LocationInfo'

const formPages = [<CastingDetails />, <LocationInfo />]

interface Props {
    createCasting: (casting: CreateCastingMutationVariables) => void
}

export const CreateCastingForm: React.FC<Props> = ({ createCasting }) => {
    const wizard = useWizard(2)
    return (
        <Formik
            validationSchema={CreateCastingSchema}
            initialValues={createCastingInitialState}
            onSubmit={createCasting}
        >
            <Form>
                <WizardForm {...wizard} pages={formPages} />
            </Form>
        </Formik>
    )
}
