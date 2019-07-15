/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCastingMutation
// ====================================================

export interface CreateCastingMutation_createCasting {
    id: number
    companyId: string
    title: string
    description: string
    city: string
    lat: number
    lng: number
    startDate: string
    duration: string
    createdAt: string
}

export interface CreateCastingMutation {
    createCasting: CreateCastingMutation_createCasting | null
}

export interface CreateCastingMutationVariables {
    companyId: string
    title: string
    description: string
    city: string
    lat: number
    lng: number
    startDate: string
    duration: string
}
