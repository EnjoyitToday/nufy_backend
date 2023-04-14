import { UserSessionController } from './modules/user-session/user-session.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './modules/user/user.repository';
import { AuthService } from './modules/user-session/user-session.service';
import { UserService } from './modules/user/user.service';
import { Music } from './entities/music.entity';
import { Playlist } from './entities/playlist.entity'; 
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      entities: [User, Music,Playlist],
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '12345678',
      database: 'mydatabase',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [UserSessionController, UserController],
  providers: [AuthService, UserService],
})
export class AppModule {}
