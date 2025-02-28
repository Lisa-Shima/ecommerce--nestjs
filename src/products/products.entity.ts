import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @Column({ type: "text" })
    description: string

    @Column({ type: "decimal" })
    price: number

    @Column({type: "int", default: 0})
    stock: number

    @Column({default: true})
    isActive: boolean
}