import { IsNumber, IsNotEmpty } from 'class-validator'

export class CreateCartItemDto{
    @IsNumber()
    @IsNotEmpty()
    cartId: number

    @IsNumber()
    @IsNotEmpty()
    productId: number
    
}