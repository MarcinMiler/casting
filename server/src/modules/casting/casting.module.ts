import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Casting } from './casting.entity'
import { CastingResolver } from './casting.resolver'
import { CastingService } from './casting.service'

@Module({
    imports: [TypeOrmModule.forFeature([Casting])],
    providers: [CastingResolver, CastingService]
})
export class CastingModule {}
