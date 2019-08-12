import { of, Subject, throwError } from 'rxjs'
import { ActionsObservable, StateObservable } from 'redux-observable'
import { toArray } from 'rxjs/operators'
import * as TypeMoq from 'typemoq'

import { RoutingService } from 'Common/Services/routingService'
import {
    mockCreateCastingNotificationSuccess,
    mockCreateCastingNotificationFailed
} from 'Modules/Casting/Tests/mocks'
import { showNotification } from 'Modules/Notification/actions'
import { CompanyNotificationsFactory } from '../notifications'
import { CompanyService } from '../service'
import { companyEpicFactory } from '../epic'
import * as actions from '../actions'
import {
    createCompanyVariablesMock,
    apolloCreateCompanyMock,
    companyMock,
    apolloMyCompaniesMock
} from './mocks'

describe('Casting Epic', () => {
    const mockState = new StateObservable(new Subject(), {})
    let mockCompanyService: TypeMoq.IMock<CompanyService>
    let mockRoutingService: TypeMoq.IMock<RoutingService>
    let mockNotificationsFactory: TypeMoq.IMock<CompanyNotificationsFactory>

    beforeEach(() => {
        mockCompanyService = TypeMoq.Mock.ofType<CompanyService>()
        mockRoutingService = TypeMoq.Mock.ofType<RoutingService>()
        mockNotificationsFactory = TypeMoq.Mock.ofType<
            CompanyNotificationsFactory
        >()
    })

    it('should create company', done => {
        mockCompanyService
            .setup(x =>
                x.createCompany(
                    TypeMoq.It.isObjectWith(createCompanyVariablesMock)
                )
            )
            .returns(() => of(apolloCreateCompanyMock))
            .verifiable()

        mockNotificationsFactory
            .setup(x => x.createCompanySuccess())
            .returns(() => mockCreateCastingNotificationSuccess)
            .verifiable()

        const companyEpicFactoryInstance = companyEpicFactory(
            mockCompanyService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
        )

        const action$ = of(
            actions.createCompanyAsync.request(createCompanyVariablesMock)
        )

        companyEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        )
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.createCompanyAsync.success(companyMock),
                    showNotification(mockCreateCastingNotificationSuccess)
                ])
                mockCompanyService.verifyAll()
                mockNotificationsFactory.verifyAll()

                done()
            })
    })

    it('should handle error on create casting', done => {
        mockCompanyService
            .setup(x =>
                x.createCompany(
                    TypeMoq.It.isObjectWith(createCompanyVariablesMock)
                )
            )
            .returns(() => throwError('Something went wrong'))
            .verifiable()

        mockNotificationsFactory
            .setup(x =>
                x.createCompanyFailed(
                    TypeMoq.It.isObjectWith(new Error('Something went wrong'))
                )
            )
            .returns(() => mockCreateCastingNotificationFailed)
            .verifiable()

        const companyEpicFactoryInstance = companyEpicFactory(
            mockCompanyService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
        )

        const action$ = of(
            actions.createCompanyAsync.request(createCompanyVariablesMock)
        )

        companyEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        )
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.createCompanyAsync.failure('Something went wrong'),
                    showNotification(mockCreateCastingNotificationFailed)
                ])
                mockCompanyService.verifyAll()
                mockNotificationsFactory.verifyAll()

                done()
            })
    })

    it('should fetch my companies', done => {
        mockCompanyService
            .setup(x => x.getMyCompanies())
            .returns(() => of(apolloMyCompaniesMock))
            .verifiable()

        const companyEpicFactoryInstance = companyEpicFactory(
            mockCompanyService.object,
            mockRoutingService.object,
            mockNotificationsFactory.object
        )

        const action$ = of(actions.getMyCompaniesAsync.request())

        companyEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(
                actions.getMyCompaniesAsync.success(apolloMyCompaniesMock)
            )
            mockCompanyService.verifyAll()

            done()
        })
    })
})
