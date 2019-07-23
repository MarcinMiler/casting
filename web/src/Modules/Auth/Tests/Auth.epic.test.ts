import { StateObservable, ActionsObservable } from 'redux-observable'
import { Subject, of } from 'rxjs'
import { toArray } from 'rxjs/operators'
import * as TypeMoq from 'typemoq'

import { RoutingService } from 'Common/Services/routingService'
import { showNotification } from 'Modules/Notification/actions'
import { AuthService } from '../service'
import { authEpicFactory } from '../epic'
import * as actions from '../actions'
import { AuthNotificationsFactory } from '../notifications'
import {
    mockLoginVariables,
    mockLoginResponse,
    mockRegisterVariables,
    mockRegisterResponse,
    apolloMeMockResponse,
    mockLoginFailedNotification,
    mockRegisterSucceedNotification,
    mockRegisterFailedNotification,
    mockNotAuthenticatedNotification
} from './mocks'

describe('Auth Epic', () => {
    const mockState = new StateObservable(new Subject(), {})
    let mockAuthService: TypeMoq.IMock<AuthService>
    let mockRoutingService: TypeMoq.IMock<RoutingService>
    let mockNotificationFactory: TypeMoq.IMock<AuthNotificationsFactory>

    beforeEach(() => {
        mockAuthService = TypeMoq.Mock.ofType<AuthService>()
        mockRoutingService = TypeMoq.Mock.ofType<RoutingService>()
        mockNotificationFactory = TypeMoq.Mock.ofType<
            AuthNotificationsFactory
        >()
    })

    it('should handle login', done => {
        mockAuthService
            .setup(x => x.login(TypeMoq.It.isObjectWith(mockLoginVariables)))
            .returns(() => Promise.resolve(mockLoginResponse))
            .verifiable()

        mockAuthService
            .setup(x =>
                x.saveToken(TypeMoq.It.isValue(mockLoginResponse.data.login))
            )
            .verifiable()

        mockRoutingService
            .setup(x => x.push(TypeMoq.It.isValue('/castings')))
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object,
            mockNotificationFactory.object
        )

        const action$ = of(actions.loginAsync.request(mockLoginVariables))

        authEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(
                actions.loginAsync.success(mockLoginResponse.data.login)
            )
            mockAuthService.verifyAll()
            mockRoutingService.verifyAll()

            done()
        })
    })

    it('should not login', done => {
        mockAuthService
            .setup(x => x.login(TypeMoq.It.isObjectWith(mockLoginVariables)))
            .throws(new Error())
            .verifiable()

        mockRoutingService
            .setup(x => x.push(TypeMoq.It.isValue('/castings')))
            .verifiable(TypeMoq.Times.never())

        mockNotificationFactory
            .setup(x =>
                x.loginNotificationFailed(
                    TypeMoq.It.isObjectWith(new Error('Invalid credentials'))
                )
            )
            .returns(() => mockLoginFailedNotification)
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object,
            mockNotificationFactory.object
        )

        const action$ = of(actions.loginAsync.request(mockLoginVariables))

        authEpicFactoryInstance(new ActionsObservable(action$), mockState, null)
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.loginAsync.failure(),
                    showNotification(mockLoginFailedNotification)
                ])
                mockAuthService.verifyAll()
                mockRoutingService.verifyAll()
                mockNotificationFactory.verifyAll()

                done()
            })
    })

    it('should register', done => {
        mockAuthService
            .setup(x =>
                x.register(TypeMoq.It.isObjectWith(mockRegisterVariables))
            )
            .returns(() => Promise.resolve(mockRegisterResponse))
            .verifiable()

        mockNotificationFactory
            .setup(x => x.registerNotificationSucceed())
            .returns(() => mockRegisterSucceedNotification)
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object,
            mockNotificationFactory.object
        )

        const action$ = of(actions.registerAsync.request(mockRegisterVariables))

        authEpicFactoryInstance(new ActionsObservable(action$), mockState, null)
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.registerAsync.success(true),
                    showNotification(mockRegisterSucceedNotification)
                ])
                mockAuthService.verifyAll()
                mockNotificationFactory.verifyAll()

                done()
            })
    })

    it('should not register', done => {
        mockAuthService
            .setup(x =>
                x.register(TypeMoq.It.isObjectWith(mockRegisterVariables))
            )
            .throws(new Error('Registration Failed'))
            .verifiable()

        mockNotificationFactory
            .setup(x =>
                x.registerNotificationFailed(
                    TypeMoq.It.isObjectWith(new Error('Registration Failed'))
                )
            )
            .returns(() => mockRegisterFailedNotification)
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object,
            mockNotificationFactory.object
        )

        const action$ = of(actions.registerAsync.request(mockRegisterVariables))

        authEpicFactoryInstance(new ActionsObservable(action$), mockState, null)
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.registerAsync.failure(),
                    showNotification(mockRegisterFailedNotification)
                ])
                mockAuthService.verifyAll()
                mockNotificationFactory.verifyAll()

                done()
            })
    })

    it('should get me', done => {
        mockAuthService
            .setup(x => x.me())
            .returns(() => Promise.resolve(apolloMeMockResponse))
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object,
            mockNotificationFactory.object
        )

        const action$ = of(actions.getMeAsync.request())

        authEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(
                actions.getMeAsync.success(apolloMeMockResponse)
            )
            mockAuthService.verifyAll()

            done()
        })
    })

    it('should catch error from me query', done => {
        mockAuthService
            .setup(x => x.me())
            .throws(new Error())
            .verifiable()

        mockNotificationFactory
            .setup(x => x.notAuthenticatedNotification())
            .returns(() => mockNotAuthenticatedNotification)
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object,
            mockNotificationFactory.object
        )

        const action$ = of(actions.getMeAsync.request())

        authEpicFactoryInstance(new ActionsObservable(action$), mockState, null)
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.getMeAsync.failure(),
                    showNotification(mockNotAuthenticatedNotification)
                ])
                mockAuthService.verifyAll()
                mockNotificationFactory.verifyAll()

                done()
            })
    })
})
