import { filter, map, pluck, switchMap } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { CastingService } from './service'
import * as actions from './actions'

export const castingEpicFactory = (castingService: CastingService): Epic => {
    const fetchCastingsEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getCastingsAsync.request)),
            pluck('payload'),
            switchMap(() => castingService.getCastings()),
            map(actions.getCastingsAsync.success)
        )

    const createCastingEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.createCastingAsync.request)),
            pluck('payload'),
            switchMap(variables => castingService.createCasting(variables)),
            map(res =>
                actions.createCastingAsync.success(res.data.createCasting)
            )
        )

    return combineEpics(fetchCastingsEpic, createCastingEpic)
}
