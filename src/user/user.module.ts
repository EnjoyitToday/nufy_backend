import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserRepository])],
  providers: [UserService, UserRepository, JwtService],
  exports: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule { }
