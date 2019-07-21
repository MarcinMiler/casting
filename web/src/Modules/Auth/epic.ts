import {
    filter,
    pluck,
    map,
    exhaustMap,
    tap,
    mergeMap,
    catchError,
    switchMap
} from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import { from, of } from 'rxjs'

import { Epic } from 'Config/rootEpic'
import { RoutingService } from 'Common/Services/routingService'
import { showNotification } from 'Modules/Notification/actions'
import {
    registerNotificationSucceed,
    registerNotificationFailed,
    loginNotificationFailed,
    notAuthenticatedNotification
} from 'Modules/Notification/factory'
import { AuthService } from './service'
import * as actions from './actions'

export const authEpicFactory = (
    authService: AuthService,
    routingService: RoutingService
): Epic => {
    const loginEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.loginAsync.request)),
            pluck('payload'),
            exhaustMap(variables => authService.login(variables)),
            tap(res => authService.saveToken(res.data.login)),
            map(res => actions.loginAsync.success(res.data.login)),
            tap(() => routingService.push('/castings')),
            catchError(err =>
                from([
                    actions.loginAsync.failure(),
                    showNotification(loginNotificationFailed(err))
                ])
            )
        )

    const registerEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.registerAsync.request)),
            pluck('payload'),
            exhaustMap(variables => authService.register(variables)),
            mergeMap(res => [
                actions.registerAsync.success(res.data.register),
                showNotification(registerNotificationSucceed())
            ]),
            catchError(err =>
                from([
                    actions.registerAsync.failure(),
                    showNotification(registerNotificationFailed(err))
                ])
            )
        )

    const meEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getMeAsync.request)),
            pluck('payload'),
            switchMap(() => authService.me()),
            map(res => actions.getMeAsync.success(res)),
            catchError(() =>
                from([
                    actions.getMeAsync.failure(),
                    showNotification(notAuthenticatedNotification())
                ])
            )
        )

    return combineEpics(loginEpic, registerEpic, meEpic)
}
