import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import { filter, pluck, switchMap, mergeMap, tap, map } from 'rxjs/operators'

import { Epic } from 'Config/rootEpic'
import { showNotification } from 'Modules/Notification/actions'
import { createCompanyNotificationSucceed } from 'Modules/Notification/factory'
import { RoutingService } from 'Common/Services/routingService'
import { CompanyService } from './service'
import * as actions from './actions'

export const companyEpicFactory = (
    companyService: CompanyService,
    routingService: RoutingService
): Epic => {
    const createCompanyEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.createCompanyAsync.request)),
            pluck('payload'),
            switchMap(variables => companyService.createCompany(variables)),
            mergeMap(res => [
                actions.createCompanyAsync.success(res.data.createCompany),
                showNotification(createCompanyNotificationSucceed())
            ]),
            tap(() => routingService.push('/castings'))
        )

    const myCompaniesEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getMyCompaniesAsync.request)),
            pluck('payload'),
            switchMap(() => companyService.getMyCompanies()),
            map(res => actions.getMyCompaniesAsync.success(res))
        )

    return combineEpics(myCompaniesEpic, createCompanyEpic)
}
