import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { MusicEntity } from './entity/music.entity';
import { MusicRepository } from './music.repository';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MusicEntity, MusicRepository])],
    providers: [MusicService, MusicRepository, JwtService],
    exports: [MusicService, MusicRepository],
    controllers: [MusicController],
})
export class MusicModule { }
