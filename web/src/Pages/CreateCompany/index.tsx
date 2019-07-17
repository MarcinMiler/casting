import * as React from 'react'

import { Navbar } from 'Components'
import { CreateCompanyContainer } from 'Modules/Company/Containers/CreateCompany'
import { Container } from './style'

const CreateCompanyPage: React.FC = () => (
    <>
        <Navbar />
        <Container>
            <CreateCompanyContainer />
        </Container>
    </>
)

export default CreateCompanyPage
