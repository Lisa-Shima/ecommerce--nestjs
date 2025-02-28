import { IsString, IsEmail, IsNotEmpty, MinLength} from 'class-validator'

export class CreateUserDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    role: string
}