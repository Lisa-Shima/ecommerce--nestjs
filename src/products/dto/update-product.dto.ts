import { IsString, IsNumber, IsOptional, IsBoolean, Min } from 'class-validator'

export class UpdateProductDto{
    @IsString()
    @IsOptional()
    name: string
    
    @IsString()
    @IsOptional()
    description: string

    @IsNumber()
    @Min(0)
    @IsOptional()
    price: number

    @IsNumber()
    @Min(0)
    @IsOptional()
    stock: number

    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}