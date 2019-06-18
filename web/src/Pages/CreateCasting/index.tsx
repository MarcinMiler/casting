import * as React from 'react'
import { Formik, Form } from 'formik'

import { useWizard } from 'Hooks'
import { WizardForm } from 'Components'
import { CreateCastingSchema } from './models/formSchema'
import { CastingDetails } from './Components/CastingDetails'
import { Container } from './style'

interface Props {}

const CreateCastingPage: React.FC<Props> = () => {
    const wizard = useWizard(2)

    return (
        <Container>
            <Formik
                validationSchema={CreateCastingSchema}
                initialValues={{ title: '' }}
                onSubmit={values => console.log(values)}
            >
                {props => (
                    <Form>
                        <WizardForm {...wizard} pages={[<CastingDetails />]} />
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default CreateCastingPage
