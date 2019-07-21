import { authReducer, defaultAuthState } from '../reducer'
import * as actions from '../actions'

describe('Auth reducer', () => {
    it('should save token', () => {
        const token = 'token'

        expect(
            authReducer(defaultAuthState, actions.loginAsync.success(token))
        ).toEqual({ ...defaultAuthState, token })
    })
})
