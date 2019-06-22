/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CastingQuery
// ====================================================

export interface CastingQuery_casting {
    __typename: 'Casting'
    id: number
    title: string
    description: string
    city: string
    startDate: string
    duration: string
}

export interface CastingQuery {
    casting: CastingQuery_casting
}

export interface CastingQueryVariables {
    id: string
}
