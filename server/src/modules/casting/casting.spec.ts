import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'
import { Casting } from './casting.entity'
import { CastingService } from './casting.service'
import { CastingDto } from './dto/casting.dto'

describe('Casting module', () => {
    let mockCastingRepo: TypeMoq.IMock<Repository<Casting>>
    let castingService: CastingService

    const mockCastingDto: CastingDto = {
        title: 'title',
        description: 'descrption',
        city: 'city',
        startDate: '11-07-2019',
        duration: '12h'
    }

    const mockCasting: Casting = {
        id: 1,
        title: 'title',
        description: 'descrption',
        city: 'city',
        startDate: '11-07-2019',
        duration: '12h'
    }

    const mockCastings = [mockCasting, mockCasting]

    beforeEach(() => {
        mockCastingRepo = TypeMoq.Mock.ofType<Repository<Casting>>()
        castingService = new CastingService(mockCastingRepo.object)
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
            .setup(x => x.delete(TypeMoq.It.isAnyNumber()))
            .throws(new Error())
            .verifiable()

        const deleteCasting = await castingService.deleteCasting(1)

        expect(deleteCasting).toBe(false)
        mockCastingRepo.verifyAll()
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
