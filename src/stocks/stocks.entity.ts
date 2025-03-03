import { Product } from "src/products/products.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Stock{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @OneToMany(() => Product, (product) => product.stock)
    products: Product[]
}