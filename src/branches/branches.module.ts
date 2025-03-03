import { Module } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { BranchesController } from './branches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './branches.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Branch])
  ],
  providers: [BranchesService],
  controllers: [BranchesController],
  exports: [
    TypeOrmModule
  ]
})
export class BranchesModule {}
