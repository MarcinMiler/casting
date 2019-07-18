import { createAsyncAction } from 'typesafe-actions'

import {
    CreateCompanyMutationVariables,
    CompanyQuery_company,
    MyCompaniesQuery
} from 'GraphqlTypes'
import { ApolloQueryResult } from 'apollo-boost'

export const getMyCompaniesAsync = createAsyncAction(
    'GET_MY_COMPANIES_REQUEST',
    'GET_MY_COMPANIES_SUCCEED',
    'GET_MY_COMPANIES_FAILURE',
    'GET_MY_COMPANIES_CANCEL'
)<undefined, ApolloQueryResult<MyCompaniesQuery>, Error, string>()

export const createCompanyAsync = createAsyncAction(
    'CREATE_COMPANY_REQUEST',
    'CREATE_COMPANY_SUCCEED',
    'CREATE_COMPANY_FAILURE',
    'CREATE_COMPANY_CANCEL'
)<CreateCompanyMutationVariables, CompanyQuery_company, Error, string>()
