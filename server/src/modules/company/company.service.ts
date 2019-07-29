import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Company } from './company.entity'
import { CompanyDto } from './dto/company.dto'

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepo: Repository<Company>
    ) {}

    findOne(id: number) {
        return this.companyRepo.findOne(id)
    }

    findAll() {
        return this.companyRepo.find()
    }

    myCompanies(userId: number) {
        return this.companyRepo.find({ where: { userId } })
    }

    async createCompany(userId: number, company: CompanyDto) {
        const newCompany = this.companyRepo.create({
            ...company,
            userId,
            logo: 'logo'
        })

        await this.companyRepo.save(newCompany)
        return newCompany
    }

    async deleteCompany(userId: number, id: number) {
        const isValidUserId = await this.compareUsersIds(id, userId)

        if (!isValidUserId) {
            throw new HttpException('Not valid user', HttpStatus.CONFLICT)
        }

        try {
            await this.companyRepo.delete(id)
            return true
        } catch (err) {
            throw new HttpException(
                'Delete company failed',
                HttpStatus.NOT_FOUND
            )
        }
    }

    async updateCompany(userId: number, id: number, company: CompanyDto) {
        const isValidUserId = await this.compareUsersIds(id, userId)

        if (!isValidUserId) {
            throw new HttpException('Not valid user', HttpStatus.CONFLICT)
        }

        return this.companyRepo.update(id, company)
    }

    async compareUsersIds(id: number, userId: number) {
        const company = await this.companyRepo.findOne(id)

        if (!company || company.userId !== userId) {
            return false
        }

        return true
    }
}
