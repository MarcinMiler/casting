import {
    CastingsQuery,
    CastingQuery,
    CreateCastingMutationVariables,
    CastingQuery_casting
} from 'GraphqlTypes'
import { apolloMock } from 'Common/Mocks/apolloMock'
import { createNotification } from 'Modules/Notification/factory'
import { castingNotificationsFactory } from '../notifications'
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
    duration: '2',
    createdAt: '17:30:14.636171'
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
        createCasting: CastingMock
    }
}

const mockNotificationFactory = castingNotificationsFactory(createNotification)

export const mockCreateCastingNotificationSuccess = mockNotificationFactory.createCastingNotificationSuccess()

export const mockCreateCastingNotificationFailed = mockNotificationFactory.createCastingNotificationFailed()
