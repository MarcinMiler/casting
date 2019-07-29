import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'
import { Usr } from './decorators/userIdFromJwt.decorator'
import { UserService } from './user.service'
import { RegisterDto } from './dto/register.dto'
import { User } from './user.entity'
import { LoginDto } from './dto/login.dto'

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query('me')
    @UseGuards(new GqlAuthGuard())
    me(@Usr() user: User) {
        return this.userService.me(user.id)
    }

    @Mutation('register')
    register(@Args('input') register: RegisterDto) {
        return this.userService.register(register)
    }

    @Mutation('login')
    login(@Args('input') login: LoginDto) {
        return this.userService.login(login)
    }
}
