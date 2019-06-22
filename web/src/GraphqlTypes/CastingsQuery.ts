/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CastingsQuery
// ====================================================

export interface CastingsQuery_castings {
    __typename: 'Casting'
    id: number
    title: string
    description: string
    city: string
    startDate: string
    duration: string
}

export interface CastingsQuery {
    castings: CastingsQuery_castings[] | null
}
