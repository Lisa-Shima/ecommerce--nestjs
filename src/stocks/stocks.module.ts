import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock } from './stocks.entity';
import { BranchesModule } from 'src/branches/branches.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stock]),
    BranchesModule
  ],
  providers: [StocksService],
  controllers: [StocksController],
  exports: [
    TypeOrmModule
  ]
})
export class StocksModule {}
