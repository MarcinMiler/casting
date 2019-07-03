import { filter, pluck, switchMap, map } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isOfType } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { AuthService } from './service'
import * as actions from './actions'

export const authEpicFactory = (authService: AuthService): Epic => {
    const loginEpic: Epic = action$ =>
        action$.pipe(
            filter(isOfType(actions.LOGIN_REQUEST)),
            pluck('payload'),
            switchMap(variables => authService.login(variables)),
            map(res => actions.loginSucceed(res.data.login))
        )

    const registerEpic: Epic = action$ =>
        action$.pipe(
            filter(isOfType(actions.REGISTER_REQUEST)),
            pluck('payload'),
            switchMap(variables => authService.register(variables)),
            map(res => actions.registerSucceed(res.data.register))
        )

    return combineEpics(loginEpic, registerEpic)
}
