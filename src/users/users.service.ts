import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find()
    }

    async findById(id: number): Promise<User | null>{
        return this.userRepository.findOne({ where: {id} })
    }

    async createUser(email: string, password: string, role: string): Promise<User>{
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = this.userRepository.create({email, password: hashedPassword, role})
        return this.userRepository.save(user)
    }

    async deleteUser(id: number): Promise<void>{
        await this.userRepository.delete(id)
    }

    async findOneByEmail(email: string): Promise<User | null>{
        return await this.userRepository.findOne({where: {email}})
    }
}
