import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Casting } from './casting.entity'

import { CastingDto } from './dto/casting.dto'

@Injectable()
export class CastingService {
    constructor(
        @InjectRepository(Casting)
        private readonly castingRepo: Repository<Casting>
    ) {}

    findOne(id: number) {
        return this.castingRepo.findOne(id)
    }

    findAll() {
        return this.castingRepo.find()
    }

    async createCasting(casting: CastingDto) {
        const newCasting = this.castingRepo.create({ ...casting })
        await this.castingRepo.save(newCasting)

        return newCasting
    }

    deleteCasting(id: number) {
        try {
            this.castingRepo.delete(id)
            return true
        } catch (err) {
            return false
        }
    }

    updateCasting(id: number, casting: CastingDto) {
        return this.castingRepo.update(id, casting)
    }
}
