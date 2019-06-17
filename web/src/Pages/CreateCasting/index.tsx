import * as React from 'react'

import { useWizard } from 'Hooks'
import { WizardForm } from 'Components'
import { Container } from './style'

interface Props {}

const CreateCastingPage: React.FC<Props> = () => {
    const wizard = useWizard(3)

    return (
        <Container>
            <WizardForm {...wizard} />
        </Container>
    )
}

export default CreateCastingPage
