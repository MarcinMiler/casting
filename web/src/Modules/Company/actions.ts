import { createAsyncAction } from 'typesafe-actions'
import { ApolloQueryResult } from 'apollo-boost'

import {
    CreateCompanyMutationVariables,
    CompanyQuery_company,
    MyCompaniesQuery
} from 'GraphqlTypes'

export const getMyCompaniesAsync = createAsyncAction(
    'GET_MY_COMPANIES_REQUEST',
    'GET_MY_COMPANIES_SUCCEED',
    'GET_MY_COMPANIES_FAILURE'
)<undefined, ApolloQueryResult<MyCompaniesQuery>, string>()

export const createCompanyAsync = createAsyncAction(
    'CREATE_COMPANY_REQUEST',
    'CREATE_COMPANY_SUCCEED',
    'CREATE_COMPANY_FAILURE'
)<CreateCompanyMutationVariables, CompanyQuery_company, string>()
