import { Branch } from "src/branches/branches.entity"
import { Product } from "src/products/products.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"

@Entity()
export class Stock{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @OneToMany(() => Product, (product) => product.stock)
    products: Product[]

    @ManyToOne(() => Branch, (branch) => branch.stocks, {nullable: false})
    branch: Branch
}