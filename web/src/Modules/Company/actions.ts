import { createAsyncAction } from 'typesafe-actions'

import {
    CreateCompanyMutationVariables,
    CompanyQuery_company
} from 'GraphqlTypes'

export const createCompanyAsync = createAsyncAction(
    'CREATE_COMPANY_REQUEST',
    'CREATE_COMPANY_SUCCEED',
    'CREATE_COMPANY_FAILURE',
    'CREATE_COMPANY_CANCEL'
)<CreateCompanyMutationVariables, CompanyQuery_company, Error, string>()
