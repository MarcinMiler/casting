import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { UserService } from './user.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation('register')
    register(@Args('input') register: RegisterDto) {
        return this.userService.register(register)
    }

    @Mutation('login')
    login(@Args('input') login: LoginDto) {
        return this.userService.login(login)
    }
}
