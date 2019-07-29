import { authReducer, defaultAuthState } from '../reducer'
import * as actions from '../actions'
import { token } from './mocks'

describe('Auth reducer', () => {
    it('should save token', () => {
        expect(
            authReducer(defaultAuthState, actions.loginAsync.success(token))
        ).toEqual({ ...defaultAuthState, token })
    })
})
