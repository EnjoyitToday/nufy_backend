import { Module } from '@nestjs/common';
import { AuthService } from './user-session.service';

@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}