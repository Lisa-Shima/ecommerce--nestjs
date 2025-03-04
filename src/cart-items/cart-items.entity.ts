import { Cart } from "src/carts/carts.entity";
import { Product } from "src/products/products.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CartItem{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Cart, (cart) => cart.cartItems, { onDelete: 'CASCADE'})
    cart: Cart

    @ManyToOne(() => Product, {onDelete: 'CASCADE'})
    product: Product

    @Column()
    quantity: number
}