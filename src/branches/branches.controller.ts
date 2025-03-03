import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('branches')
export class BranchesController {
    constructor(
        private readonly branchesService: BranchesService
    ){}

    @Get()
    async getBranches(){
        return await this.branchesService.findAll()
    }

    @Get(':id')
    async getBranchById(@Param('id') id: number){
        return await this.branchesService.findById(id)
    }

    @Post()
    @UseGuards(AuthGuard('jwt'), new RolesGuard('admin'))
    async createBranch(@Body() createBranchDto: CreateBranchDto){
        return await this.branchesService.createBranch(createBranchDto)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), new RolesGuard('admin'))
    async updateBranch(@Param('id') id: number, @Body() updateBranchDto: UpdateBranchDto){
        return await this.branchesService.updateBranch(id, updateBranchDto)
    }
}
