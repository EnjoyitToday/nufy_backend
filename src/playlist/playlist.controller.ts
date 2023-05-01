import { Body, Controller, Delete, Get, HttpCode, Post, Query, UseGuards } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { createPlaylistDto } from './dto/createPlaylist.dto';
import { AddMusicToPlaylistDto } from './dto/addMusicToPlaylist.dto';
import { DeleteMusicFromPlaylistDto } from './dto/deleteMusicFromPlaylist.dto';
import { AuthGuard } from 'src/commom/auth.guard';
import { PlaylistEntity } from './entity/playlist.entity';

@Controller('playlist')
@UseGuards(AuthGuard)
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  @HttpCode(201)
  async createPlaylist(@Body() createPlaylist:createPlaylistDto):Promise<PlaylistEntity>{
    return this.playlistService.createPlaylist(createPlaylist)
  };

  // @Get()
  // async getByName(@Query('playlist_id') playlist_id: string,@Query('music_id') music_id: string): Promise<PlaylistEntity> {
    // return await this.playlistService.getMusicByName(name);
  // };

  @Post('music')
  async addMusicOnPlaylist(@Body() addMusic:AddMusicToPlaylistDto):Promise<PlaylistEntity>{
    return this.playlistService.addMusicOnPlaylist(addMusic);
  }

  @Delete('music')
  async deleteMusicOnPlaylist(@Body() delMusic:DeleteMusicFromPlaylistDto):Promise<PlaylistEntity>{
    return this.playlistService.deleteMusicFromPlaylist(delMusic);

  }
}