import { Stock } from 'src/stocks/stocks.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

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
    quantity: number

    @Column({default: true})
    isActive: boolean

    @ManyToOne(() => Stock, (stock) => stock.products, {nullable: false})
    stock: Stock
}