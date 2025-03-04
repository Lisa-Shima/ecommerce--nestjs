import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './cart-items.entity';
import { Repository } from 'typeorm';
import { CreateCartItemDto } from './dto/create-cart-item.dto';

@Injectable()
export class CartItemsService {
    constructor(
        @InjectRepository(CartItem) private cartItemsRepository: Repository<CartItem>
    ){}

    async getAllCartItems(cartId: number): Promise<CartItem[]>{
        return await this.cartItemsRepository.find({where: {cart: {id: cartId}}, relations: ['product']})
    }

    async addItemToCart(cartId: number, productId: number, body: {quantity: number}): Promise<CartItem>{
        const quantity = body.quantity
        const cartItem = await this.cartItemsRepository.create({ cart: {id: cartId}, product: {id: productId}, quantity})
        return await this.cartItemsRepository.save(cartItem)
    }

    async updateCartItem(cartItemId: number, quantity: number): Promise<CartItem | null>{
        await this.cartItemsRepository.update(cartItemId, {quantity})
        return await this.cartItemsRepository.findOne({where: {id: cartItemId}})
    }
    
    async deleteCartItem(cartItemId: number): Promise<void>{
        await this.cartItemsRepository.delete(cartItemId)
    }
}
