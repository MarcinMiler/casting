import { ApolloQueryResult } from 'apollo-boost'

import { CastingsQuery } from 'GraphqlTypes'
import { CreateCastingResponse } from '../service'

export const CastingMock = {
    id: 1,
    companyId: '1',
    title: 'title',
    description: 'description',
    city: 'city',
    lat: 1,
    lng: 1,
    startDate: '12.12.1212',
    duration: '2'
}

export const ApolloCastingsMock: ApolloQueryResult<CastingsQuery> = {
    data: {
        castings: [
            {
                ...CastingMock
            }
        ]
    },
    networkStatus: 1,
    loading: false,
    stale: false
}

export const CreateCastingVariables = {
    companyId: '1',
    title: 'title',
    description: 'description',
    city: 'city',
    lat: 1,
    lng: 1,
    startDate: '12.12.1212',
    duration: '2'
}

export const ApolloCreateCastingMock: CreateCastingResponse = {
    data: {
        createCasting: {
            ...CastingMock
        }
    }
}
