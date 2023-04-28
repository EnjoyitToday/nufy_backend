import { UserSessionController } from './user-session/user-session.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { UserRepository } from './user/user.repository';
import { AuthService } from './user-session/user-session.service';
import { UserService } from './user/user.service';
import { Music } from './music/entity/music.entity';
import { Playlist } from './playlist/entity/playlist.entity'; 
import { JwtModule } from '@nestjs/jwt';
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
