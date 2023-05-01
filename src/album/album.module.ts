import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from './entity/album.entity';
import { AlbumRepository } from './album.repository';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AlbumEntity, AlbumRepository])],
    providers: [AlbumService, AlbumRepository],
    exports: [AlbumService, AlbumRepository],
    controllers: [AlbumController],
})
export class AlbumModule { }
