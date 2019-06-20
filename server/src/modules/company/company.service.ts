import { Injectable } from '@nestjs/common'
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
        const isValidUserId = this.compareUsersIds(userId)

        if (!isValidUserId) {
            return false
        }

        try {
            this.companyRepo.delete(id)
            return true
        } catch (err) {
            return false
        }
    }

    async updateCompany(userId: number, id: number, company: CompanyDto) {
        const isValidUserId = this.compareUsersIds(userId)

        if (!isValidUserId) {
            return false
        }

        return this.companyRepo.update(id, company)
    }

    async compareUsersIds(userId: number) {
        const companyUser = await this.companyRepo.findOne({
            where: { userId }
        })

        if (companyUser.id !== userId) {
            return false
        }

        return true
    }
}
