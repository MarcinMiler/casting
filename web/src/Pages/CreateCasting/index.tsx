import * as React from 'react'
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'

import { CreateCastingMutation } from 'ApolloGraphQl'
import {
    CreateCastingMutation as CreateCastingMutationType,
    CreateCastingMutationVariables
} from 'GraphqlTypes/CreateCastingMutation'

import { useWizard } from 'Hooks'
import { WizardForm } from 'Components'
import { CastingDetails } from './Components/CastingDetails'
import { CreateCastingSchema } from './models/formSchema'
import { LocationInfo } from './Components/LocationInfo'
import { Container } from './style'

const formPages = [<CastingDetails />, <LocationInfo />]

interface Props {}

const CreateCastingPage: React.FC<Props> = () => {
    const wizard = useWizard(2)
    const [createCasting] = useMutation<
        CreateCastingMutationType,
        CreateCastingMutationVariables
    >(CreateCastingMutation)

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
