import * as React from 'react'

import { Navbar } from 'Components'
import { CreateCastingContainer } from 'Modules/Casting/Containers/CreateCasting'
import { Container } from './style'

const CreateCastingPage: React.FC = () => (
    <>
        <Navbar />
        <Container>
            <CreateCastingContainer />
        </Container>
    </>
)

export default CreateCastingPage
