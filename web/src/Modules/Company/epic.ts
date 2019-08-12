import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import {
    filter,
    pluck,
    switchMap,
    mergeMap,
    tap,
    map,
    catchError
} from 'rxjs/operators'

import { Epic } from 'Config/rootEpic'
import { showNotification } from 'Modules/Notification/actions'
import { RoutingService } from 'Common/Services/Routing'
import { routesList } from 'Routes/routesList'
import { CompanyNotificationsFactory } from './notifications'
import { CompanyService } from './service'
import * as actions from './actions'

export const companyEpicFactory = (
    companyService: CompanyService,
    routingService: RoutingService,
    companyNotifications: CompanyNotificationsFactory
): Epic => {
    const createCompanyEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.createCompanyAsync.request)),
            pluck('payload'),
            switchMap(variables =>
                companyService.createCompany(variables).pipe(
                    mergeMap(res => [
                        actions.createCompanyAsync.success(
                            res.data.createCompany
                        ),
                        showNotification(
                            companyNotifications.createCompanySuccess()
                        )
                    ]),
                    tap(() => routingService.push(routesList.myCompanies)),
                    catchError(err => [
                        actions.createCompanyAsync.failure(err),
                        showNotification(
                            companyNotifications.createCompanyFailed(err)
                        )
                    ])
                )
            )
        )

    const myCompaniesEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getMyCompaniesAsync.request)),
            pluck('payload'),
            switchMap(() =>
                companyService
                    .getMyCompanies()
                    .pipe(map(res => actions.getMyCompaniesAsync.success(res)))
            )
        )

    return combineEpics(myCompaniesEpic, createCompanyEpic)
}
