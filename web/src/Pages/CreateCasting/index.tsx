import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
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
import { LocationInfo } from './Components/LocationInfo'
import { CreateCastingSchema } from './models/formSchema'
import { Container } from './style'

const formPages = [<CastingDetails />, <LocationInfo />]

interface Props extends RouteComponentProps {}

const CreateCastingPage: React.FC<Props> = ({ history }) => {
    const wizard = useWizard(2)
    const [createCasting] = useMutation<
        CreateCastingMutationType,
        CreateCastingMutationVariables
    >(CreateCastingMutation)

    const submit = async (values: any) => {
        const { lat, lng, ...rest } = values
        const response = await createCasting({
            variables: { ...rest, companyId: 1 }
        })

        if (response && response.data && response.data.createCasting) {
            const { id } = response.data.createCasting

            history.push(`/casting/${id}`)
        }
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
