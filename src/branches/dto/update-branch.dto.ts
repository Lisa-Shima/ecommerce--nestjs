import { IsString, IsOptional } from 'class-validator'

export class UpdateBranchDto{
    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    location: string
}