import { ofType, Epic, combineEpics } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

export const castingEpicFactory = () => {
    const castingEpic: Epic = $action =>
        $action.pipe(
            ofType('PING'),
            mapTo('PONG')
        )
    return combineEpics(castingEpic)
}
