import * as React from 'react'

import { Navbar } from 'Components'
import { MyCompaniesContainer } from 'Modules/Company/Containers/MyCompanies'
import { Container, Wrapper } from './style'

const MyCompanies: React.FC = () => (
    <>
        <Navbar />

        <Container>
            <Wrapper>
                <MyCompaniesContainer />
            </Wrapper>
        </Container>
    </>
)

export default MyCompanies
