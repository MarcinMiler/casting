import { of, Subject } from 'rxjs'
import { ActionsObservable, StateObservable } from 'redux-observable'
import * as TypeMoq from 'typemoq'

import { RoutingService } from 'Common/Services/routingService'
import { CastingService } from '../service'
import { castingEpicFactory } from '../epic'
import * as actions from '../actions'
import {
    ApolloCastingsMock,
    ApolloCreateCastingMock,
    CreateCastingVariables,
    CastingMock
} from './mocks'

describe('Casting Epic', () => {
    const mockState = new StateObservable(new Subject(), {})
    let mockCastingService: TypeMoq.IMock<CastingService>
    let mockRoutingService: TypeMoq.IMock<RoutingService>

    beforeEach(() => {
        mockCastingService = TypeMoq.Mock.ofType<CastingService>()
        mockRoutingService = TypeMoq.Mock.ofType<RoutingService>()
    })

    it('should fetch castings', done => {
        mockCastingService
            .setup(x => x.getCastings())
            .returns(() => Promise.resolve(ApolloCastingsMock))
            .verifiable()

        const castingEpicFactoryInstance = castingEpicFactory(
            mockCastingService.object,
            mockRoutingService.object
        )
        const action$ = of(actions.getCastingsAsync.request())

        castingEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(
                actions.getCastingsAsync.success(ApolloCastingsMock)
            )
            mockCastingService.verifyAll()

            done()
        })
    })

    it('should create casting', done => {
        mockCastingService
            .setup(x =>
                x.createCasting(TypeMoq.It.isObjectWith(CreateCastingVariables))
            )
            .returns(() => Promise.resolve(ApolloCreateCastingMock))

        const { id } = ApolloCreateCastingMock.data.createCasting

        mockRoutingService
            .setup(x => x.push(TypeMoq.It.isValue(`/casting/${id}`)))
            .verifiable()

        const castingEpicFactoryInstance = castingEpicFactory(
            mockCastingService.object,
            mockRoutingService.object
        )
        const action$ = of(
            actions.createCastingAsync.request(CreateCastingVariables)
        )

        castingEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.createCastingAsync.success(CastingMock))
            mockCastingService.verifyAll()
            mockRoutingService.verifyAll()

            done()
        })
    })
})
