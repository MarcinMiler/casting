import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Casting } from '../casting/casting.entity'

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    name: string

    @Column()
    logo: string

    @Column()
    description: string

    @OneToMany(() => Casting, casting => casting.company)
    castings: Casting[]
}
