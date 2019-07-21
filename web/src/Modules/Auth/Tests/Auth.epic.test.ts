import { StateObservable, ActionsObservable } from 'redux-observable'
import { Subject, of } from 'rxjs'
import * as TypeMoq from 'typemoq'

import { RoutingService } from 'Common/Services/routingService'
import { AuthService } from '../service'
import { authEpicFactory } from '../epic'
import * as actions from '../actions'
import {
    mockLoginVariables,
    mockLoginResponse,
    mockRegisterVariables,
    mockRegisterResponse,
    apolloMeMockResponse
} from './mocks'

describe('Auth Epic', () => {
    const mockState = new StateObservable(new Subject(), {})
    let mockAuthService: TypeMoq.IMock<AuthService>
    let mockRoutingService: TypeMoq.IMock<RoutingService>

    beforeEach(() => {
        mockAuthService = TypeMoq.Mock.ofType<AuthService>()
        mockRoutingService = TypeMoq.Mock.ofType<RoutingService>()
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
            mockRoutingService.object
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

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object
        )

        const action$ = of(actions.loginAsync.request(mockLoginVariables))

        authEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.loginAsync.failure())
            mockAuthService.verifyAll()
            mockRoutingService.verifyAll()

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

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object
        )

        const action$ = of(actions.registerAsync.request(mockRegisterVariables))

        authEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.registerAsync.success(true))
            mockAuthService.verifyAll()

            done()
        })
    })

    it('should not register', done => {
        mockAuthService
            .setup(x =>
                x.register(TypeMoq.It.isObjectWith(mockRegisterVariables))
            )
            .throws(new Error())
            .verifiable()

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object
        )

        const action$ = of(actions.registerAsync.request(mockRegisterVariables))

        authEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.registerAsync.failure())
            mockAuthService.verifyAll()

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
            mockRoutingService.object
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

        const authEpicFactoryInstance = authEpicFactory(
            mockAuthService.object,
            mockRoutingService.object
        )

        const action$ = of(actions.getMeAsync.request())

        authEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.getMeAsync.failure())
            mockAuthService.verifyAll()

            done()
        })
    })
})
