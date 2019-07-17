import * as React from 'react'
import { Formik, Form } from 'formik'

import { WizardForm } from 'Components'
import { useWizard } from 'Hooks'
import {
    createCompanyInitialState,
    createCompanySchema
} from 'Modules/Company/schema'
import { createCompanyAsync } from 'Modules/Company/actions'
import { CompanyDetails } from './CompanyDetails'

const formPages = [<CompanyDetails />]

interface Props {
    createCompany: typeof createCompanyAsync.request
}

export const CreateCompanyForm: React.FC<Props> = ({ createCompany }) => {
    const wizard = useWizard(1)
    return (
        <Formik
            initialValues={createCompanyInitialState}
            validationSchema={createCompanySchema}
            onSubmit={createCompany}
        >
            <Form>
                <WizardForm {...wizard} pages={formPages} />
            </Form>
        </Formik>
    )
}
