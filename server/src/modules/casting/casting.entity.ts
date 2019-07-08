import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

import { Company } from '../company/company.entity'

@Entity()
export class Casting {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    city: string

    @Column('double precision')
    lat: number

    @Column('double precision')
    lng: number

    @Column()
    startDate: string

    @Column()
    duration: string

    @CreateDateColumn({ type: 'time' })
    createdAt: Date

    @UpdateDateColumn({ type: 'time' })
    updatedAt: Date

    @Column()
    companyId: Date

    @ManyToOne(() => Company, company => company.castings)
    company: Company
}
