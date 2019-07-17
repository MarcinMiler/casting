import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { CompanyService } from './company.service'
import { CompanyDto } from './dto/company.dto'
import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard'
import { Usr } from '../user/decorators/userIdFromJwt.decorator'
import { User } from '../user/user.entity'

@Resolver()
export class CompanyResolver {
    constructor(private readonly companyService: CompanyService) {}

    @Query('company')
    findOne(@Args('id') id: number) {
        return this.companyService.findOne(id)
    }

    @Query('companies')
    findAll() {
        return this.companyService.findAll()
    }

    @Mutation('createCompany')
    @UseGuards(new GqlAuthGuard())
    createCompany(@Usr() user: User, @Args('input') company: CompanyDto) {
        return this.companyService.createCompany(user.id, company)
    }

    @UseGuards(new GqlAuthGuard())
    @Mutation('updateCompany')
    updateCompany(
        @Usr() user: User,
        @Args('id') id: number,
        @Args('company') company: CompanyDto
    ) {
        return this.companyService.updateCompany(user.id, id, company)
    }

    @UseGuards(new GqlAuthGuard())
    @Mutation('deleteCompany')
    deleteCompany(@Usr() user: User, @Args('id') id: number) {
        return this.companyService.deleteCompany(user.id, id)
    }
}
