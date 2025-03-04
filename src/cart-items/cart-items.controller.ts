import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';

@Controller('cart-items')
export class CartItemsController {
    constructor(
        private readonly cartItemsService: CartItemsService
    ){}

    @Get(':cartId')
    async getAllCartItems(@Param('cartId') cartId: number){
        return await this.cartItemsService.getAllCartItems(cartId)
    }

    @Post(':cartId/:productId')
    async addProductToCart(@Param('cartId') cartId: number, @Param('productId') productId: number, @Body() body: {quantity: number}){
        return await this.cartItemsService.addItemToCart(cartId, productId, body)
    }

    @Put(':cartItemId')
    async updateCartItem(@Param('cartItemId') cartItemId: number, @Body() quantity: number){
        return await this.cartItemsService.updateCartItem(cartItemId, quantity)
    }

    @Delete(':cartItemId')
    async deleteCartItem(@Param('cartItemId') cartItemId: number){
        return await this.cartItemsService.deleteCartItem(cartItemId)
    }
}
