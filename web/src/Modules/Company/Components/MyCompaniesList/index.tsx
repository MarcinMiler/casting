import * as React from 'react'

import { CompanyQuery_company } from 'GraphqlTypes'
import { Button, StyledLink } from 'Components'
import { routesList } from 'Routes/routesList'
import { MyCompany } from '../MyCompany'
import { CompaniesWrapper, ButtonWrapper } from './style'

interface Props {
    myCompanies: CompanyQuery_company[]
}

export const MyCompaniesList: React.FC<Props> = ({ myCompanies }) => (
    <>
        <CompaniesWrapper>
            {myCompanies.map(company => (
                <MyCompany myCompany={company} />
            ))}
        </CompaniesWrapper>

        <ButtonWrapper>
            <StyledLink to={routesList.createCompany}>
                <Button>Create new company</Button>
            </StyledLink>
        </ButtonWrapper>
    </>
)
