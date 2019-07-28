import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'

import { User } from '../../user/user.entity'
import { AuthService } from '../auth.service'
import { mockUser, mockToken, mockPayload } from './mocks'

describe('Auth module', () => {
    let mockUserRepo: TypeMoq.IMock<Repository<User>>
    let mockJwtService: TypeMoq.IMock<JwtService>
    let authService: AuthService

    beforeEach(() => {
        mockUserRepo = TypeMoq.Mock.ofType<Repository<User>>()
        mockJwtService = TypeMoq.Mock.ofType<JwtService>()
        authService = new AuthService(
            mockUserRepo.object,
            mockJwtService.object
        )
    })

    it('should sign id and return token', async () => {
        mockJwtService
            .setup(x => x.sign(TypeMoq.It.isAny()))
            .returns(() => mockToken)
            .verifiable()

        authService = new AuthService(
            mockUserRepo.object,
            mockJwtService.object
        )

        const signToken = await authService.signIn(1)

        mockJwtService.verifyAll()
        expect(signToken).toEqual(mockToken)
    })

    it('should find user by payload id', async () => {
        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockUser))
            .verifiable()

        const user = await authService.validateUser(mockPayload)

        expect(user).toEqual(mockUser)
        mockUserRepo.verifyAll()
    })
})
