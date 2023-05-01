import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService, UserRepository, JwtService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule { }
