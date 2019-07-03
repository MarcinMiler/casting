import { filter, pluck, map, exhaustMap, tap } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { History } from 'history'
import { AuthService } from './service'
import * as actions from './actions'

export const authEpicFactory = (
    authService: AuthService,
    history: History
): Epic => {
    const loginEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.loginAsync.request)),
            pluck('payload'),
            exhaustMap(variables => authService.login(variables)),
            map(res => {
                authService.saveToken(res.data.login)
                return actions.loginAsync.success(res.data.login)
            }),
            tap(() => history.push('/castings'))
        )

    const registerEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.registerAsync.request)),
            pluck('payload'),
            exhaustMap(variables => authService.register(variables)),
            map(res => actions.registerAsync.success(res.data.register))
        )

    return combineEpics(loginEpic, registerEpic)
}
