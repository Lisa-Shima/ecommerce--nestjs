import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    
    @Get('admin-only')
    @UseGuards(AuthGuard('jwt'), new RolesGuard('admin'))
    adminRouteOnly(){
        return {message: 'Only admins can access this route'}
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll(){
        return await this.usersService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: number){
        return await this.usersService.findById(id)
    }

    @Post()
    async createUser(@Body() body : {email: string, password: string, role: string}){
        return await this.usersService.createUser(body.email, body.password, body.role)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        return await this.usersService.deleteUser(id)
    }
}
