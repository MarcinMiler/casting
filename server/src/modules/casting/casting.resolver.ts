import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { CastingService } from './casting.service'
import { CastingDto } from './dto/casting.dto'

@Resolver()
export class CastingResolver {
    constructor(private readonly castingService: CastingService) {}

    @Query('casting')
    findOne(@Args('id') id: number) {
        return this.castingService.findOne(id)
    }

    @Query('castings')
    findAll(@Args('cursor') cursor: string) {
        return this.castingService.findAll(cursor)
    }

    @Mutation('createCasting')
    createCasting(@Args('input') casting: CastingDto) {
        return this.castingService.createCasting(casting)
    }

    @Mutation('deleteCasting')
    deleteCasting(id: number) {
        return this.castingService.deleteCasting(id)
    }

    @Mutation('updateCasting')
    updateCasting(@Args('id') id: number, @Args('input') casting: CastingDto) {
        return this.castingService.updateCasting(id, casting)
    }
}
