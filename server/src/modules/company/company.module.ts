import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Company } from './company.entity'
import { CompanyResolver } from './company.resolver'
import { CompanyService } from './company.service'

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    providers: [CompanyResolver, CompanyService]
})
export class CompanyModule {}
