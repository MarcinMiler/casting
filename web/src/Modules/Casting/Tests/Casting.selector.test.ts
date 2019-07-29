import { appStateMock } from 'Common/Mocks/appStateMock'
import { getCastings, getCastingsLatLng, getCasting } from '../selectors'
import { defaultCastingState } from '../reducer'
import { CastingMock } from './mocks'

const appState = {
    ...appStateMock,
    castings: {
        ...defaultCastingState,
        castings: [CastingMock],
        casting: {
            '1': CastingMock
        }
    }
}

describe('Casting selectors', () => {
    it('should extract castings', () => {
        expect(getCastings(appState)).toEqual([CastingMock])
    })

    it('should extract latitude and longitude', () => {
        expect(getCastingsLatLng(appState)).toEqual([
            { lat: CastingMock.lat, lng: CastingMock.lng }
        ])
    })

    it('should extract casting', () => {
        expect(getCasting(appState, '1')).toEqual(CastingMock)
    })
})
