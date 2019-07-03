import { createSelector } from 'reselect'

import { AppState } from 'Config/appState'

export const getCastings = (state: AppState) => state.castings.castings
export const getCastingsLatLng = createSelector(
    getCastings,
    castings => castings.map(({ lat, lng }) => ({ lat, lng }))
)
