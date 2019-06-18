import * as React from 'react'
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'

import { useWizard } from 'Hooks'
import { CreateCastingMutation } from 'ApolloGraphQl'
import { WizardForm } from 'Components'
import { CreateCastingSchema } from './models/formSchema'
import { CastingDetails } from './Components/CastingDetails'
import { Container } from './style'
import { LocationInfo } from './Components/LocationInfo'

const formPages = [<CastingDetails />, <LocationInfo />]

interface Props {}

const CreateCastingPage: React.FC<Props> = () => {
    const wizard = useWizard(2)
    const [createCasting] = useMutation(CreateCastingMutation)

    const submit = async (values: any) => {
        const { lat, lng, ...rest } = values
        await createCasting({ variables: { ...rest } })
    }

    return (
        <Container>
            <Formik
                validationSchema={CreateCastingSchema}
                initialValues={{ title: '' }}
                onSubmit={submit}
            >
                {() => (
                    <Form>
                        <WizardForm {...wizard} pages={formPages} />
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default CreateCastingPage
