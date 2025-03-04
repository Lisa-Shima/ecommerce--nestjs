import { Cart } from "src/carts/carts.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column({default: 'customer'}) // Role can be customer or admin
    role: string;

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[]
}