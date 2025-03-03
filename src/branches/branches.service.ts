import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './branches.entity';
import { Repository } from 'typeorm';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchesService {
    constructor(
        @InjectRepository(Branch) private branchRepository: Repository<Branch>
    ){}

    async findAll(): Promise<Branch[]>{
        return await this.branchRepository.find({ relations: ['stocks']})
    }

    async findById(id: number): Promise<Branch | null>{
        return await this.branchRepository.findOne({where: {id}, relations: ['stocks']})
    }

    async createBranch(createBranchDto: CreateBranchDto): Promise<Branch>{
        const branch = await this.branchRepository.create(createBranchDto)
        return await this.branchRepository.save(branch)
    }

    async updateBranch(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch | null>{
        await this.branchRepository.update(id, updateBranchDto)
        return this.branchRepository.findOne({where: {id}})
    }
}
