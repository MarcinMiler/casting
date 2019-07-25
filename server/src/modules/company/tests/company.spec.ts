import { Repository } from 'typeorm'
import * as TypeMoq from 'typemoq'

import { Company } from '../company.entity'
import { CompanyService } from '../company.service'
import {
    mockCompanyDto,
    mockUpdateCompanyDto,
    mockCompany,
    userId,
    otherUserId,
    mockCompanies,
    notValidUserException,
    deleteCompanyFailedException
} from './mocks'

describe('Company module', () => {
    let mockCompanyRepo: TypeMoq.IMock<Repository<Company>>
    let companyService: CompanyService

    beforeEach(() => {
        mockCompanyRepo = TypeMoq.Mock.ofType<Repository<Company>>()
        companyService = new CompanyService(mockCompanyRepo.object)
    })

    it('should find company', async () => {
        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isValue(1)))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        const casting = await companyService.findOne(1)

        expect(casting).toEqual(mockCompany)
        mockCompanyRepo.verifyAll()
    })

    it('should find all companies', async () => {
        mockCompanyRepo
            .setup(x => x.find())
            .returns(() => Promise.resolve(mockCompanies))
            .verifiable()

        const casting = await companyService.findAll()

        expect(casting).toEqual(mockCompanies)
        mockCompanyRepo.verifyAll()
    })

    it('should find my companies', async () => {
        mockCompanyRepo
            .setup(x => x.find(TypeMoq.It.isAny()))
            .returns(() => Promise.resolve(mockCompanies))
            .verifiable()

        const casting = await companyService.myCompanies(1)

        expect(casting).toEqual(mockCompanies)
        mockCompanyRepo.verifyAll()
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
            .setup(x => x.delete(TypeMoq.It.isValue(otherUserId)))
            .verifiable(TypeMoq.Times.never())

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        try {
            await companyService.deleteCompany(otherUserId, mockCompany.id)
        } catch (err) {
            expect(err).toEqual(notValidUserException)
            mockCompanyRepo.verifyAll()
        }
    })

    it('should not delete company on delete error', async () => {
        mockCompanyRepo
            .setup(x => x.delete(TypeMoq.It.isAnyNumber()))
            .throws(new Error())
            .verifiable()

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        try {
            await companyService.deleteCompany(userId, mockCompany.id)
        } catch (err) {
            expect(err).toEqual(deleteCompanyFailedException)
            mockCompanyRepo.verifyAll()
        }
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
                    TypeMoq.It.isValue(1),
                    TypeMoq.It.isObjectWith(mockUpdateCompanyDto)
                )
            )
            .verifiable(TypeMoq.Times.never())

        mockCompanyRepo
            .setup(x => x.findOne(TypeMoq.It.isAnyNumber()))
            .returns(() => Promise.resolve(mockCompany))
            .verifiable()

        try {
            await companyService.updateCompany(
                otherUserId,
                1,
                mockUpdateCompanyDto
            )
        } catch (err) {
            expect(err).toEqual(notValidUserException)

            mockCompanyRepo.verifyAll()
        }
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
