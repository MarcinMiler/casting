/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CastingQuery
// ====================================================

export interface CastingQuery_casting {
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

export interface CastingQuery {
    casting: CastingQuery_casting
}

export interface CastingQueryVariables {
    id: string
}
