/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCastingMutation
// ====================================================

export interface CreateCastingMutation_createCasting {
    __typename: 'Casting'
    id: number
    title: string
    description: string
    city: string
    startDate: string
    duration: string
}

export interface CreateCastingMutation {
    createCasting: CreateCastingMutation_createCasting | null
}

export interface CreateCastingMutationVariables {
    title: string
    description: string
    city: string
    startDate: string
    duration: string
}
