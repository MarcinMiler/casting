import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'

import { User } from '../user.entity'
import { UserService } from '../user.service'
import { AuthService } from '../../auth/auth.service'
import {
    mockUser,
    mockLoginDto,
    mockRegisterDto,
    invalidCredentialsException,
    emailIsTakenException
} from './mocks'

describe('User module', () => {
    let mockUserRepo: TypeMoq.IMock<Repository<User>>
    let authService: TypeMoq.IMock<AuthService>
    let userService: UserService
    const bcrypt = {
        hash: jest.fn(() => 'hash')
    }

    beforeEach(() => {
        mockUserRepo = TypeMoq.Mock.ofType<Repository<User>>()
        authService = TypeMoq.Mock.ofType<AuthService>()
        userService = new UserService(
            mockUserRepo.object,
            bcrypt,
            authService.object
        )
    })

    it(`should not register with incorrect credentials`, async () => {
        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(mockUser))
            .verifiable()

        mockUserRepo
            .setup(x => x.create(TypeMoq.It.isObjectWith(mockUser)))
            .verifiable(TypeMoq.Times.never())

        try {
            await userService.register(mockRegisterDto)
        } catch (err) {
            expect(err).toEqual(emailIsTakenException)
            mockUserRepo.verifyAll()
        }
    })

    it('should register with correct credentials', async () => {
        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => null)
            .verifiable()

        mockUserRepo
            .setup(x =>
                x.create(
                    TypeMoq.It.isObjectWith({
                        ...mockRegisterDto,
                        password: 'hash'
                    })
                )
            )
            .verifiable()

        mockUserRepo.setup(x => x.save(TypeMoq.It.isAny())).verifiable()

        const register = await userService.register(mockRegisterDto)

        expect(register).toBe(true)
        expect(bcrypt.hash).toHaveBeenCalledTimes(1)

        mockUserRepo.verifyAll()
    })

    it('should login with correct credentials', async () => {
        const mockBcrypt = {
            compare: jest.fn(() => true)
        }

        userService = new UserService(
            mockUserRepo.object,
            mockBcrypt,
            authService.object
        )

        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(mockUser))
            .verifiable()

        authService
            .setup(x => x.signIn(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve('token'))
            .verifiable()

        const login = await userService.login(mockLoginDto)

        expect(login).toBe('token')
        mockUserRepo.verifyAll()
        authService.verifyAll()
    })

    it('should not login with invalid email', async () => {
        const mockBcrypt = {
            compare: jest.fn(() => false)
        }

        userService = new UserService(
            mockUserRepo.object,
            mockBcrypt,
            authService.object
        )

        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => null)
            .verifiable()

        authService
            .setup(x => x.signIn(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve('token'))
            .verifiable(TypeMoq.Times.never())

        try {
            await userService.login(mockLoginDto)
        } catch (err) {
            expect(err).toEqual(invalidCredentialsException)
            expect(mockBcrypt.compare).toHaveBeenCalledTimes(0)

            mockUserRepo.verifyAll()
            authService.verifyAll()
        }
    })

    it('should not login with invalid password', async () => {
        const mockBcrypt = {
            compare: jest.fn(() => false)
        }

        userService = new UserService(
            mockUserRepo.object,
            mockBcrypt,
            authService.object
        )

        mockUserRepo
            .setup(x => x.findOne(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(mockUser))
            .verifiable()

        authService
            .setup(x => x.signIn(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve('token'))
            .verifiable(TypeMoq.Times.never())

        try {
            await userService.login(mockLoginDto)
        } catch (err) {
            expect(err).toEqual(invalidCredentialsException)
            expect(mockBcrypt.compare).toHaveBeenCalledTimes(1)

            mockUserRepo.verifyAll()
            authService.verifyAll()
        }
    })
})
