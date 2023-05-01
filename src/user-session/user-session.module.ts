import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Module({
  exports: [AuthService],
  providers: [AuthService, JwtService, UserService],
})
export class AuthModule { }