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
import { MusicController } from './music/music.controller';
import { PlaylistController } from './playlist/playlist.controller';
import { AlbumController } from './album/album.controller';
import { AlbumModule } from './album/album.module';
import { MusicModule } from './music/music.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [
    UserModule,
    AlbumModule,
    MusicModule,
    PlaylistModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService,
      inject: [DBConfigService]
    }),
  ],
  controllers: [
    UserSessionController,
    UserController,
    AlbumController,
    MusicController,
    PlaylistController,
  ],
  providers: [AuthService, UserService, JwtService],
})
export class AppModule { }
