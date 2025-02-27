import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        private usersService : UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(email: string, password: string){
        const user = await this.usersService.findOneByEmail(email)
        if(!user) throw new UnauthorizedException('Invalid credentials')
        
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) throw new UnauthorizedException('Invalid credentials')
        
        return user
    }

    async login(email: string, password: string){
        const user = await this.validateUser(email, password)
        const payload = {id: user.id, email: user.email, role: user.role}

        return{
            access_token: this.jwtService.sign(payload)
        }
    }
}
