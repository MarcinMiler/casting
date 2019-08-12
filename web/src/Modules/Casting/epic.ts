import {
    filter,
    map,
    pluck,
    switchMap,
    tap,
    mergeMap,
    catchError
} from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { RoutingService } from 'Common/Services/Routing'
import { showNotification } from 'Modules/Notification/actions'
import { routesList } from 'Routes/routesList'
import { CastingNotificationsFactory } from './notifications'
import { CastingService } from './service'
import * as actions from './actions'

export const castingEpicFactory = (
    castingService: CastingService,
    routingService: RoutingService,
    notificationFactory: CastingNotificationsFactory
): Epic => {
    const fetchCastingsEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getCastingsAsync.request)),
            pluck('payload'),
            switchMap(() =>
                castingService
                    .getCastings()
                    .pipe(map(res => actions.getCastingsAsync.success(res)))
            )
        )

    const fetchMoreCastingsEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getMoreCastingsAsync.request)),
            pluck('payload'),
            switchMap(variables =>
                castingService
                    .getMoreCastings(variables)
                    .pipe(map(res => actions.getMoreCastingsAsync.success(res)))
            )
        )

    const fetchCastingEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getCastingAsync.request)),
            pluck('payload'),
            switchMap(variables =>
                castingService
                    .getCasting(variables)
                    .pipe(map(res => actions.getCastingAsync.success(res)))
            )
        )

    const createCastingEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.createCastingAsync.request)),
            pluck('payload'),
            switchMap(variables =>
                castingService.createCasting(variables).pipe(
                    tap(res =>
                        routingService.push(
                            routesList.casting(res.data.createCasting.id)
                        )
                    ),
                    mergeMap(res => [
                        actions.createCastingAsync.success(
                            res.data.createCasting
                        ),
                        showNotification(
                            notificationFactory.createCastingNotificationSuccess()
                        )
                    ]),
                    catchError(err => [
                        actions.createCastingAsync.failure(err),
                        showNotification(
                            notificationFactory.createCastingNotificationFailed()
                        )
                    ])
                )
            )
        )

    return combineEpics(
        fetchCastingsEpic,
        fetchMoreCastingsEpic,
        fetchCastingEpic,
        createCastingEpic
    )
}
