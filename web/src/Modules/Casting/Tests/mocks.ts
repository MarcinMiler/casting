import { ApolloQueryResult } from 'apollo-boost'

import {
    CastingsQuery,
    CastingQuery,
    CreateCastingMutationVariables,
    CastingQuery_casting
} from 'GraphqlTypes'
import { apolloMock } from 'Common/Mocks/apolloMock'
import { CreateCastingResponse } from '../service'

export const CastingMock: CastingQuery_casting = {
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

export const ApolloCastingsMock = apolloMock<CastingsQuery>({
    castings: [CastingMock]
})

export const ApolloCastingMock = apolloMock<CastingQuery>({
    casting: CastingMock
})

export const CreateCastingVariables: CreateCastingMutationVariables = {
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
