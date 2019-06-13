import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as bcrypt from 'bcryptjs'

import { AuthModule } from '../auth/auth.module'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { User } from './user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([User]), AuthModule],
    providers: [
        UserService,
        UserResolver,
        {
            provide: 'bcrypt',
            useValue: bcrypt
        }
    ]
})
export class UserModule {}
