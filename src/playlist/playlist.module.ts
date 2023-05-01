import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistEntity } from './entity/playlist.entity';
import { PlaylistRepository } from './playlist.repository';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { UserRepository } from '../user/user.repository';
import { MusicRepository } from '../music/music.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([PlaylistEntity, PlaylistRepository, UserRepository, MusicRepository])],
    providers: [PlaylistService, PlaylistRepository, UserRepository, MusicRepository, JwtService],
    exports: [PlaylistService, PlaylistRepository],
    controllers: [PlaylistController],
})
export class PlaylistModule { }
