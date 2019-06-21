import * as TypeMoq from 'typemoq'
import { Repository, UpdateResult } from 'typeorm'

import { Company } from './company.entity'
import { CompanyService } from './company.service'

describe('Company module', () => {
    let mockCompanyRepo: TypeMoq.IMock<Repository<Company>>
    let companyService: CompanyService

    const mockCompanyDto = {
        name: 'name',
        logo: 'logo',
        description: 'desc'
    }

    const mockUpdateCompanyDto = {
        name: 'name2',
        logo: 'logo2',
        description: 'desc2'
    }

    const mockCompany = {
        id: 1,
        name: 'name',
        logo: 'logo',
        description: 'desc',
        userId: 1,
        castings: []
    }

    const userId = 1
    const otherUserId = 2

    beforeEach(() => {
        mockCompanyRepo = TypeMoq.Mock.ofType<Repository<Company>>()
        companyService = new CompanyService(mockCompanyRepo.object)
    })

    it('should create company', async () => {
        mockCompanyRepo
            .setup(x => x.create(TypeMoq.It.isObjectWith(mockCompanyDto)))
            .returns(() => mockCompany)
            .verifiable()

        mockCompanyRepo
            .setup(x => x.save(TypeMoq.It.isObjectWith(mockCompany)))
            .verifiable()

        const newCompany = await companyService.createCompany(
            userId,
            mockCompany
        )

        expect(newCompany).toEqual(mockCompany)
        mockCompanyRepo.verifyAll()
    })

    it('should delete company', async () => {
        mockCompanyRepo
            .setup(x => x.delete(TypeMoq.It.isAnyNumber()))
            .verifiable()

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        const deletedCompany = await companyService.deleteCompany(
            userId,
            mockCompany.id
        )

        expect(deletedCompany).toBeTruthy()
        mockCompanyRepo.verifyAll()
    })

    it('should not delete company with other userId', async () => {
        mockCompanyRepo
            .setup(x => x.delete(TypeMoq.It.isAnyNumber()))
            .verifiable(TypeMoq.Times.never())

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        const deletedCompany = await companyService.deleteCompany(
            otherUserId,
            mockCompany.id
        )

        expect(deletedCompany).toBeFalsy()
        mockCompanyRepo.verifyAll()
    })

    it('should not delete company on delete error adn retun false', async () => {
        mockCompanyRepo
            .setup(x => x.delete(TypeMoq.It.isAnyNumber()))
            .throws(new Error())
            .verifiable()

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        const deletedCompany = await companyService.deleteCompany(
            userId,
            mockCompany.id
        )

        expect(deletedCompany).toBeFalsy()
        mockCompanyRepo.verifyAll()
    })

    it('should update company', async () => {
        mockCompanyRepo
            .setup(x =>
                x.update(
                    TypeMoq.It.isAnyNumber(),
                    TypeMoq.It.isObjectWith(mockUpdateCompanyDto)
                )
            )
            .verifiable()

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        await companyService.updateCompany(userId, 1, mockUpdateCompanyDto)

        mockCompanyRepo.verifyAll()
    })

    it('should not update company with other userId', async () => {
        mockCompanyRepo
            .setup(x =>
                x.update(
                    TypeMoq.It.isAnyNumber(),
                    TypeMoq.It.isObjectWith(mockUpdateCompanyDto)
                )
            )
            .verifiable(TypeMoq.Times.never())

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        await companyService.updateCompany(otherUserId, 1, mockUpdateCompanyDto)

        mockCompanyRepo.verifyAll()
    })

    it('should compare userIds and return true', async () => {
        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        const compare = await companyService.compareUsersIds(1, userId)

        expect(compare).toBe(true)
        mockCompanyRepo.verifyAll()
    })

    it('should compare userIds and return false', async () => {
        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        const compare = await companyService.compareUsersIds(1, otherUserId)

        expect(compare).toBe(false)
        mockCompanyRepo.verifyAll()
    })
})
