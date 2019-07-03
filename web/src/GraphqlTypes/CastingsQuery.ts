/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CastingsQuery
// ====================================================

export interface CastingsQuery_castings {
    id: number
    companyId: string
    title: string
    description: string
    city: string
    lat: number
    lng: number
    startDate: string
    duration: string
}

export interface CastingsQuery {
    castings: CastingsQuery_castings[] | null
}
