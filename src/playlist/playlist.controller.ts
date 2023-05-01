import { Body, Controller, Delete, Get, Header, Headers, HttpCode, Post, Query, UseGuards } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { createPlaylistDto } from './dto/createPlaylist.dto';
import { AddMusicToPlaylistDto } from './dto/addMusicToPlaylist.dto';
import { DeleteMusicFromPlaylistDto } from './dto/deleteMusicFromPlaylist.dto';
import { AuthGuard } from 'src/commom/auth.guard';
import { PlaylistEntity } from './entity/playlist.entity';
import { UserAuth } from './dto/userAuth';

@Controller('playlist')
@UseGuards(AuthGuard)
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) { }

  @Post()
  @HttpCode(201)
  async createPlaylist(@Headers('user_id') userAuth: UserAuth, @Body() createPlaylist: createPlaylistDto): Promise<PlaylistEntity> {
    createPlaylist.user_id = userAuth.userId
    return this.playlistService.createPlaylist(createPlaylist)
  };

  @Get()
  async getAll(): Promise<PlaylistEntity[]> {
    return await this.playlistService.getAll();
  };

  @Get('/user')
  async getByUserId(@Headers("user_id") userAuth: UserAuth): Promise<PlaylistEntity[]> {
    return await this.playlistService.findUserPlaylists(userAuth.userId);
  };

  @Post('music')
  async addMusicOnPlaylist(@Body() addMusic: AddMusicToPlaylistDto): Promise<PlaylistEntity> {
    return this.playlistService.addMusicOnPlaylist(addMusic);
  }

  @Delete('music')
  async deleteMusicOnPlaylist(@Body() delMusic: DeleteMusicFromPlaylistDto): Promise<PlaylistEntity> {
    return this.playlistService.deleteMusicFromPlaylist(delMusic);
  }

}