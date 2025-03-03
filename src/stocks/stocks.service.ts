import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Stock } from './stocks.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Branch } from 'src/branches/branches.entity';

@Injectable()
export class StocksService {
    constructor(
        @InjectRepository(Stock) private stockRepository: Repository<Stock>,
        @InjectRepository(Branch) private branchRepository: Repository<Branch>
    ){}

    async findAll(): Promise<Stock[]>{
        return await this.stockRepository.find({ relations: ['products']})
    }

    async findById(id: number): Promise<Stock | null>{
        return await this.stockRepository.findOne({where: {id}, relations: ['branch','products']})
    }

    async create(createStockDto: CreateStockDto): Promise<Stock>{
        const {name, branchId} = createStockDto

        const branch = await this.branchRepository.findOne({where: {id: branchId}})
        if(!branch) throw new NotFoundException('Branch Not Found!')

        const stock = await this.stockRepository.create({name, branch})
        return await this.stockRepository.save(stock)
    }
    
    async update(id: number, updateStockDto: UpdateStockDto): Promise<Stock | null>{
        await this.stockRepository.update(id, updateStockDto)
        return await this.stockRepository.findOne({where: {id}})
    }
}
