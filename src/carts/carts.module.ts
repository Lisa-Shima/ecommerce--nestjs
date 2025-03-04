import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './carts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart])
  ],
  providers: [CartsService],
  controllers: [CartsController],
  exports: [TypeOrmModule]
})
export class CartsModule {}
