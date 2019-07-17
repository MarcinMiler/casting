/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCompanyMutation
// ====================================================

export interface CreateCompanyMutation_createCompany {
    id: string
    name: string
    logo: string
    description: string
}

export interface CreateCompanyMutation {
    createCompany: CreateCompanyMutation_createCompany | null
}

export interface CreateCompanyMutationVariables {
    name: string
    logo: string
    description: string
}
