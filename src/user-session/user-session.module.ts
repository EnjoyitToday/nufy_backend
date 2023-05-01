import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';

@Module({
  exports: [AuthService],
  providers: [AuthService, JwtService, UserService, ConfigService],
})
export class AuthModule { }