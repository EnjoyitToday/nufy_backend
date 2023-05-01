import { UserSessionController } from './user-session/user-session.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './user-session/auth.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { DBConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      useClass:DBConfigService,
      inject:[DBConfigService]
    })
  ],
  controllers: [
    UserSessionController,
    UserController],
  providers: [AuthService, UserService],
})
export class AppModule {}
