import { IsNumber, IsOptional } from 'class-validator'

export class UpdateStockDto{
    @IsNumber()
    @IsOptional()
    name: string
}