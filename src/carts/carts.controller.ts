import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('carts')
export class CartsController {
    constructor(
        private readonly cartsService: CartsService
    ){}

    @Get(':userId')
    async getAllCarts(@Param('userId') userId: number){
        return await this.cartsService.findByUserId(userId)
    }

    @Post(':userId')
    async createCart(@Param('userId') userId: number){
        return await this.cartsService.create(userId)
    }
}
