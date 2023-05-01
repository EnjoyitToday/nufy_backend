import { UserSessionController } from './user-session/user-session.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './user-session/auth.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { DBConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './user/user.module'
import { UserRepository } from './user/user.repository';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService,
      inject: [DBConfigService]
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [
    UserSessionController,
    UserController],
  providers: [AuthService, UserService, JwtService],
})
export class AppModule { }
