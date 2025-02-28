import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    async getProducts(){
        return await this.productsService.findProducts()
    }

    @Post()
    async createProduct(@Body() createProduct: CreateProductDto){
        return await this.productsService.createProduct(createProduct)
    }

    @Get(':id')
    async getProductById(@Param('id') id: number){
        return await this.productsService.findProductById(id)
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() updateProduct: UpdateProductDto){
        return await this.productsService.updateProduct(id, updateProduct)
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number){
        return await this.productsService.deleteProduct(id)
    }
}
