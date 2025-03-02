import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    async getProducts(){
        return await this.productsService.findProducts()
    }

    @Post()
    @UseGuards(AuthGuard('jwt'),new RolesGuard('admin'))
    async createProduct(@Body() createProduct: CreateProductDto){
        return await this.productsService.createProduct(createProduct)
    }

    @Get(':id')
    async getProductById(@Param('id') id: number){
        return await this.productsService.findProductById(id)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'),new RolesGuard('admin'))
    async updateProduct(@Param('id') id: number, @Body() updateProduct: UpdateProductDto){
        return await this.productsService.updateProduct(id, updateProduct)
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'),new RolesGuard('admin'))
    async deleteProduct(@Param('id') id: number){
        return await this.productsService.deleteProduct(id)
    }
}
