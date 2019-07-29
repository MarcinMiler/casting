import * as React from 'react'

import { MyCompaniesQuery_myCompanies } from 'GraphqlTypes'
import { StyledLink } from 'Components'
import { routesList } from 'Routes/routesList'
import { Container } from './style'

interface Props {
    myCompany: MyCompaniesQuery_myCompanies
}

export const MyCompany: React.FC<Props> = ({ myCompany }) => (
    <StyledLink to={routesList.myCompany(myCompany.id)}>
        <Container />
    </StyledLink>
)
