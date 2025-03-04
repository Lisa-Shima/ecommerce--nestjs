import { Module } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CartItemsController } from './cart-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './cart-items.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartItem])
  ],
  providers: [CartItemsService],
  controllers: [CartItemsController],
  exports: [
    TypeOrmModule
  ]
})
export class CartItemsModule {}
