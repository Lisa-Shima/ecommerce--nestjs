import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './carts.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartsService {
    constructor(
        @InjectRepository(Cart) private cartsRepository: Repository<Cart>
    ){}
    
    async findByUserId(id: number): Promise<Cart | null>{
        return await this.cartsRepository.findOne({where: {user: {id}}, relations: ['cartItems']})
    }

    async create(userId: number): Promise<Cart>{
        const cart = await this.cartsRepository.create({user: {id: userId}})
        return await this.cartsRepository.save(cart)
    }
    
}
