import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Stock } from './stocks.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
    constructor(
        @InjectRepository(Stock) private stockRepository: Repository<Stock>
    ){}

    async findAll(): Promise<Stock[]>{
        return await this.stockRepository.find({ relations: ['products']})
    }

    async findById(id: number): Promise<Stock | null>{
        return await this.stockRepository.findOne({where: {id}, relations: ['products']})
    }

    async create(createStockDto: CreateStockDto): Promise<Stock>{
        const stock = await this.stockRepository.create(createStockDto)
        return await this.stockRepository.save(stock)
    }
    
    async update(id: number, updateStockDto: UpdateStockDto): Promise<Stock | null>{
        await this.stockRepository.update(id, updateStockDto)
        return await this.stockRepository.findOne({where: {id}})
    }
}
