import { filter, pluck, map, exhaustMap } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { AuthService } from './service'
import * as actions from './actions'

export const authEpicFactory = (authService: AuthService): Epic => {
    const loginEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.loginAsync.request)),
            pluck('payload'),
            exhaustMap(variables => authService.login(variables)),
            map(res => actions.loginAsync.success(res.data.login))
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
