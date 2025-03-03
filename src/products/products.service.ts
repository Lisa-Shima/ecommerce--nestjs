import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Stock } from 'src/stocks/stocks.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        @InjectRepository(Stock)
        private stockRepository: Repository<Stock>
    ){}

    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        const { name, description, price, quantity, stockId } = createProductDto

        const stock = await this.stockRepository.findOne({where: {id: stockId}})
        if(!stock) throw new NotFoundException('Stock Not Found!')

        const product = await this.productRepository.create({name, description, price, quantity, stock})
        return await this.productRepository.save(product)
    }

    async findProducts(): Promise<Product[]>{
        return await this.productRepository.find({ relations: ['stock']})
    }

    async findProductById(id: number): Promise<Product | null>{
        return await this.productRepository.findOne({where: {id}, relations: ['stock']})
    }

    async updateProduct(id: number, updatedProduct: UpdateProductDto): Promise<Product | null>{
        await this.productRepository.update(id, updatedProduct)
        return this.productRepository.findOne({where: {id}})
    }

    async deleteProduct(id: number): Promise<void>{
        await this.productRepository.delete(id)
    }

}
