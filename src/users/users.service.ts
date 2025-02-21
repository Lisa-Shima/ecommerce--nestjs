import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

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
        const user = this.userRepository.create({email, password, role})
        return this.userRepository.save(user)
    }

    async deleteUser(id: number): Promise<void>{
        await this.userRepository.delete(id)
    }
}
