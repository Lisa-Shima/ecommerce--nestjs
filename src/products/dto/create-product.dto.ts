import { IsString, IsNumber, IsOptional, IsBoolean, Min } from 'class-validator'

export class CreateProductDto{
    @IsString()
    name: string
    
    @IsString()
    description: string

    @IsNumber()
    @Min(0)
    price: number

    @IsNumber()
    @Min(0)
    @IsOptional()
    quantity: number

    @IsBoolean()
    @IsOptional()
    isActive: boolean;

    @IsNumber()
    stockId: number
}