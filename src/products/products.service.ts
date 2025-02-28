import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        const product = await this.productRepository.create(createProductDto)
        return await this.productRepository.save(product)
    }

    async findProducts(): Promise<Product[]>{
        return await this.productRepository.find()
    }

    async findProductById(id: number): Promise<Product | null>{
        return await this.productRepository.findOne({where: {id}})
    }

    async updateProduct(id: number, updatedProduct: UpdateProductDto): Promise<Product | null>{
        await this.productRepository.update(id, updatedProduct)
        return this.productRepository.findOne({where: {id}})
    }

    async deleteProduct(id: number): Promise<void>{
        await this.productRepository.delete(id)
    }

}
