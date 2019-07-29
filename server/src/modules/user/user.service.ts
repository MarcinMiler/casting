import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AuthService } from '../auth/auth.service'
import { User } from './user.entity'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @Inject('bcrypt') private readonly bcrypt: any,
        private readonly authService: AuthService
    ) {}

    me(userId: number) {
        return this.userRepository.findOne(userId)
    }

    async register(register: RegisterDto) {
        const { email, password } = register

        const emailExists = await this.userRepository.findOne({
            where: { email }
        })

        if (emailExists) {
            throw new HttpException(
                'Email is already taken',
                HttpStatus.CONFLICT
            )
        }

        const hash = await this.bcrypt.hash(password, 10)

        const newUser = this.userRepository.create({
            ...register,
            password: hash
        })
        await this.userRepository.save(newUser)

        return true
    }

    async login(login: LoginDto) {
        const { email, password } = login

        const user = await this.userRepository.findOne({ where: { email } })

        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.CONFLICT)
        }

        const comparePasswords = await this.bcrypt.compare(
            password,
            user.password
        )

        if (!comparePasswords) {
            throw new HttpException('Invalid credentials', HttpStatus.CONFLICT)
        }

        const token = await this.authService.signIn(user.id)

        return token
    }
}
