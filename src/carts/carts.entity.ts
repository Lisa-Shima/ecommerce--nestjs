import { CartItem } from "src/cart-items/cart-items.entity"
import { User } from "src/users/users.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"

@Entity()
export class Cart{
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => CartItem, (cartItem) => cartItem.cart, {cascade: true})
    cartItems: CartItem[]

    @ManyToOne(() => User, (user) => user.carts, { onDelete: 'CASCADE'})
    user: User
}