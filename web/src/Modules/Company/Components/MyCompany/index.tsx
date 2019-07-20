import * as React from 'react'

import { StyledLink } from 'Components'
import { MyCompaniesQuery_myCompanies } from 'GraphqlTypes'
import { Container } from './style'

interface Props {
    myCompany: MyCompaniesQuery_myCompanies
}

export const MyCompany: React.FC<Props> = ({ myCompany }) => (
    <StyledLink to={`/myCompany/${myCompany.id}`}>
        <Container />
    </StyledLink>
)
