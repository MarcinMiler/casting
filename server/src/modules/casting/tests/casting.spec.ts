import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'
import { HttpException, HttpStatus } from '@nestjs/common'

import { Casting } from '../casting.entity'
import { CastingService } from '../casting.service'
import { CastingDto } from '../dto/casting.dto'
import { mockCastingDto, mockCasting, mockCastings } from './mocks'

describe('Casting module', () => {
    let mockCastingRepo: TypeMoq.IMock<Repository<Casting>>
    let castingService: CastingService

    beforeEach(() => {
        mockCastingRepo = TypeMoq.Mock.ofType<Repository<Casting>>()
        castingService = new CastingService(mockCastingRepo.object)
    })

    it('should find casting', async () => {
        mockCastingRepo
            .setup(x => x.findOne(TypeMoq.It.isValue(1)))
            .returns(() => Promise.resolve(mockCasting))
            .verifiable()

        const casting = await castingService.findOne(1)

        expect(casting).toEqual(mockCasting)
        mockCastingRepo.verifyAll()
    })

    it('should find castings with cursor', async () => {
        mockCastingRepo
            .setup(x => x.find(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(mockCastings))
            .verifiable()

        const castings = await castingService.findAll('11-07-2019')

        expect(castings).toEqual(mockCastings)
        mockCastingRepo.verifyAll()
    })

    it('should find castings without cursor', async () => {
        mockCastingRepo
            .setup(x => x.find(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(mockCastings))
            .verifiable()

        const castings = await castingService.findAll()

        expect(castings).toEqual(mockCastings)
        mockCastingRepo.verifyAll()
    })

    it('should create casting', async () => {
        mockCastingRepo
            .setup(x =>
                x.create(TypeMoq.It.isObjectWith<CastingDto>(mockCastingDto))
            )
            .returns(() => mockCasting)
            .verifiable()

        mockCastingRepo
            .setup(x =>
                x.save(TypeMoq.It.isObjectWith<CastingDto>(mockCastingDto))
            )
            .verifiable()

        const casting = await castingService.createCasting(mockCasting)

        expect(casting).toEqual(mockCasting)
        mockCastingRepo.verifyAll()
    })

    it('should delete casting', async () => {
        mockCastingRepo
            .setup(x => x.delete(TypeMoq.It.isAnyNumber()))
            .verifiable()

        const deleteCasting = await castingService.deleteCasting(1)

        expect(deleteCasting).toBe(true)
        mockCastingRepo.verifyAll()
    })

    it('should fail deleting casting', async () => {
        mockCastingRepo
            .setup(x => x.delete(TypeMoq.It.isValue(1)))
            .throws(new Error())
            .verifiable()

        try {
            await castingService.deleteCasting(1)
        } catch (err) {
            expect(err).toEqual(
                new HttpException('Delete casting failed', HttpStatus.NOT_FOUND)
            )
            mockCastingRepo.verifyAll()
        }
    })

    it('should update casting', async () => {
        mockCastingRepo
            .setup(x =>
                x.update(
                    TypeMoq.It.isAnyNumber(),
                    TypeMoq.It.isObjectWith<Casting>(mockCasting)
                )
            )
            .verifiable()

        await castingService.updateCasting(1, mockCasting)

        mockCastingRepo.verifyAll()
    })
})
