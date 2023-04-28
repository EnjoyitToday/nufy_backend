import { Controller, Post, Query } from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Put('add')
  async getByName(@Query('playlist_id') playlist_id: string,@Query('music_id') music_id: string): Promise<void> {
    
    return await this.playlistService.getMusicByName(name);
  }
}