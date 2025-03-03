import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stocks')
export class StocksController {
    constructor(
        private readonly stocksService: StocksService
    ){}

    @Get()
    async getAllStocks(){
        return await this.stocksService.findAll()
    }

    @Get(':id')
    async getStockById(@Param('id') id: number){
        return await this.stocksService.findById(id)
    }

    @Post()
    @UseGuards(AuthGuard('jwt'), new RolesGuard('admin'))
    async createStock(@Body() createStockDto: CreateStockDto){
        return await this.stocksService.create(createStockDto)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), new RolesGuard('admin'))
    async updateStock(@Param('id') id: number, @Body() updateStockDto: UpdateStockDto){
        return await this.stocksService.update(id, updateStockDto)
    }
}
