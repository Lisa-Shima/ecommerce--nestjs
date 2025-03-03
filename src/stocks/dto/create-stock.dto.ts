import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateStockDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    branchId: number
}