import { IsString, IsNotEmpty } from 'class-validator'

export class CreateStockDto{
    @IsString()
    @IsNotEmpty()
    name: string
}