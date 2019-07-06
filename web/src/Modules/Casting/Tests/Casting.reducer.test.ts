import { castingsReducer, defaultCastingState } from '../reducer'
import { ApolloCastingsMock, CastingMock, ApolloCastingMock } from './mocks'
import * as actions from '../actions'

describe('Casting Reducer', () => {
    it('should save fetched castings', () => {
        const state = castingsReducer(
            defaultCastingState,
            actions.getCastingsAsync.success(ApolloCastingsMock)
        )

        expect(state).toEqual({
            ...defaultCastingState,
            isFetchingCastings: false,
            castings: [CastingMock]
        })
    })

    it('should save fetched casting', () => {
        const state = castingsReducer(
            defaultCastingState,
            actions.getCastingAsync.success(ApolloCastingMock)
        )

        expect(state).toEqual({
            ...defaultCastingState,
            isFetchingCasting: false,
            casting: {
                [CastingMock.id]: CastingMock
            }
        })
    })

    it('should save new casting to the store', () => {
        const state = castingsReducer(
            defaultCastingState,
            actions.createCastingAsync.success(CastingMock)
        )

        expect(state).toEqual({
            ...defaultCastingState,
            castings: [CastingMock]
        })
    })
})
