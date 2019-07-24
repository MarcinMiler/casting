import {
    CreateCompanyMutationVariables,
    CompanyQuery_company
} from 'GraphqlTypes'
import { createNotification } from 'Modules/Notification/factory'
import { apolloMock } from 'Common/Mocks/apolloMock'
import { CreateCompanyResponse } from '../service'
import { companyNotificationsFactory } from '../notifications'

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

export const apolloMyCompaniesMock = apolloMock({ myCompanies: [companyMock] })

const mockNotificationFactory = companyNotificationsFactory(createNotification)

export const mockCreateCompanySuccess = mockNotificationFactory.createCompanySuccess()

export const mockCreateCompanyFailed = mockNotificationFactory.createCompanyFailed(
    new Error('Something went wrong')
)
