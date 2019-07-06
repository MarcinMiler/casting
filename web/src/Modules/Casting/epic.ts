import { filter, map, pluck, switchMap, tap, mergeMap } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { RoutingService } from 'Common/Services/routingService'
import { showNotification } from 'Modules/Notification/actions'
import { createCastingNotificationSucceed } from 'Modules/Notification/factory'
import { CastingService } from './service'
import * as actions from './actions'

export const castingEpicFactory = (
    castingService: CastingService,
    routingService: RoutingService
): Epic => {
    const fetchCastingsEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getCastingsAsync.request)),
            pluck('payload'),
            switchMap(() => castingService.getCastings()),
            map(res => actions.getCastingsAsync.success(res))
        )

    const fetchCastingEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getCastingAsync.request)),
            pluck('payload'),
            switchMap(variables => castingService.getCasting(variables)),
            map(res => actions.getCastingAsync.success(res))
        )

    const createCastingEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.createCastingAsync.request)),
            pluck('payload'),
            switchMap(variables => castingService.createCasting(variables)),
            tap(res =>
                routingService.push(`/casting/${res.data.createCasting.id}`)
            ),
            mergeMap(res => [
                actions.createCastingAsync.success(res.data.createCasting),
                showNotification(createCastingNotificationSucceed())
            ])
        )

    return combineEpics(fetchCastingsEpic, fetchCastingEpic, createCastingEpic)
}
