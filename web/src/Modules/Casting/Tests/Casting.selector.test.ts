import { getCastings, getCastingsLatLng } from '../selectors'
import { CastingMock } from './mocks'

const appState = {
    castings: { castings: [CastingMock] }
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
})
