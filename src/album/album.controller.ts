import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/commom/auth.guard';
import { AlbumService } from './album.service';
import { CreateAlbumDTO } from './dto/createAlbumDTO';
import { AlbumEntity } from './entity/album.entity';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService) { }

    @Post()
    @HttpCode(201)
    async createPlaylist(@Body() createAlbumDto: CreateAlbumDTO): Promise<AlbumEntity> {
        return this.albumService.createAlbum(createAlbumDto)
    };

    // @Get()
    // async getByName(@Query('playlist_id') playlist_id: string, @Query('music_id') music_id: string): Promise<PlaylistEntity> {
    //     return await this.albumService.getMusicByName(name);
    // };

}