import { of, Subject } from 'rxjs'
import { ActionsObservable, StateObservable } from 'redux-observable'
import * as TypeMoq from 'typemoq'
import { toArray } from 'rxjs/operators'

import { RoutingService } from 'Common/Services/routingService'
import { showNotification } from 'Modules/Notification/actions'
import { routesList } from 'Routes/routesList'
import { CastingService } from '../service'
import { castingEpicFactory } from '../epic'
import * as actions from '../actions'
import { CastingNotificationsFactory } from '../notifications'
import {
    ApolloCastingsMock,
    ApolloCreateCastingMock,
    CreateCastingVariables,
    CastingMock,
    mockCreateCastingNotificationSuccess,
    mockCreateCastingNotificationFailed
} from './mocks'

describe('Casting Epic', () => {
    const mockState = new StateObservable(new Subject(), {})
    let mockCastingService: TypeMoq.IMock<CastingService>
    let mockRoutingService: TypeMoq.IMock<RoutingService>
    let mockNotificationsFactory: TypeMoq.IMock<CastingNotificationsFactory>

    beforeEach(() => {
        mockCastingService = TypeMoq.Mock.ofType<CastingService>()
        mockRoutingService = TypeMoq.Mock.ofType<RoutingService>()
        mockNotificationsFactory = TypeMoq.Mock.ofType<
            CastingNotificationsFactory
        >()
    })

    it('should fetch castings', done => {
        mockCastingService
            .setup(x => x.getCastings())
            .returns(() => Promise.resolve(ApolloCastingsMock))
            .verifiable()

        const castingEpicFactoryInstance = castingEpicFactory(
            mockCastingService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
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

    it('should fetch more castings', done => {
        const cursor = ApolloCastingsMock.data.castings[0].createdAt

        mockCastingService
            .setup(x => x.getMoreCastings(TypeMoq.It.isObjectWith({ cursor })))
            .returns(() => Promise.resolve(ApolloCastingsMock))
            .verifiable()

        const castingEpicFactoryInstance = castingEpicFactory(
            mockCastingService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
        )
        const action$ = of(actions.getMoreCastingsAsync.request({ cursor }))

        castingEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(
                actions.getMoreCastingsAsync.success(ApolloCastingsMock)
            )
            mockCastingService.verifyAll()
            mockNotificationsFactory.verifyAll()

            done()
        })
    })

    it('should create casting', done => {
        mockCastingService
            .setup(x =>
                x.createCasting(TypeMoq.It.isObjectWith(CreateCastingVariables))
            )
            .returns(() => Promise.resolve(ApolloCreateCastingMock))
            .verifiable()

        const { id } = ApolloCreateCastingMock.data.createCasting

        mockRoutingService
            .setup(x => x.push(TypeMoq.It.isValue(`/casting/${id}`)))
            .verifiable()

        mockNotificationsFactory
            .setup(x => x.createCastingNotificationSuccess())
            .returns(() => mockCreateCastingNotificationSuccess)
            .verifiable()

        const castingEpicFactoryInstance = castingEpicFactory(
            mockCastingService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
        )
        const action$ = of(
            actions.createCastingAsync.request(CreateCastingVariables)
        )

        castingEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        )
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.createCastingAsync.success(CastingMock),
                    showNotification(mockCreateCastingNotificationSuccess)
                ])
                mockCastingService.verifyAll()
                mockRoutingService.verifyAll()
                mockNotificationsFactory.verifyAll()

                done()
            })
    })

    it('should handle error on create casting', done => {
        mockCastingService
            .setup(x =>
                x.createCasting(TypeMoq.It.isObjectWith(CreateCastingVariables))
            )
            .throws(new Error('Something went wrong'))
            .verifiable()

        const { id } = ApolloCreateCastingMock.data.createCasting

        mockRoutingService
            .setup(x => x.push(TypeMoq.It.isValue(routesList.casting(id))))
            .verifiable(TypeMoq.Times.never())

        mockNotificationsFactory
            .setup(x => x.createCastingNotificationFailed())
            .returns(() => mockCreateCastingNotificationFailed)
            .verifiable()

        const castingEpicFactoryInstance = castingEpicFactory(
            mockCastingService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
        )
        const action$ = of(
            actions.createCastingAsync.request(CreateCastingVariables)
        )

        castingEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        )
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.createCastingAsync.failure(
                        new Error('Something went wrong')
                    ),
                    showNotification(mockCreateCastingNotificationFailed)
                ])
                mockCastingService.verifyAll()
                mockRoutingService.verifyAll()

                done()
            })
    })
})
