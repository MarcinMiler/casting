import { combineEpics } from 'redux-observable'
import { filter, map, pluck, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'

import { Epic } from 'Config/rootEpic'
import { CastingService } from './service'
import * as actions from './actions'

export const castingEpicFactory = (castingService: CastingService): Epic => {
    const castingsEpic: Epic = action$ =>
        action$.pipe(
            filter(isOfType(actions.GET_CASTINGS_REQUESTED)),
            pluck('payload'),
            switchMap(() => castingService.getCastings()),
            map(data => actions.getCastingsSucceed(data))
        )

    return combineEpics(castingsEpic)
}
