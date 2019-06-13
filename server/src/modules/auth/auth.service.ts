import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { JwtPayload } from './interfaces/JwtPayload.interface'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        private readonly jwtService: JwtService
    ) {}

    async signIn(id: number) {
        const user: JwtPayload = { id }
        const token = this.jwtService.sign(user)
        return token
    }

    async validateUser(payload: JwtPayload) {
        return await this.userRepo.findOne(payload.id)
    }
}
