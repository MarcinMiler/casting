import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export class Casting extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    city: string

    @Column()
    startDate: string

    @Column()
    duration: string
}
