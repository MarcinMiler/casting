import {
    CreateCompanyMutationVariables,
    CompanyQuery_company
} from 'GraphqlTypes'
import { CreateCompanyResponse } from '../service'

export const companyMock: CompanyQuery_company = {
    id: '1',
    name: 'name',
    logo: 'logo',
    description: 'description'
}

export const createCompanyVariablesMock: CreateCompanyMutationVariables = {
    name: 'name',
    logo: 'logo',
    description: 'description'
}

export const apolloCreateCompanyMock: CreateCompanyResponse = {
    data: {
        createCompany: companyMock
    }
}
