import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {expiresIn: '4d'}
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
