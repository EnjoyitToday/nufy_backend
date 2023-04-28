import { Music } from 'src/music/entity/music.entity';
import { MusicService } from './music.service';
import { Controller, Post, Query } from '@nestjs/common';

@Controller('musics')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  async getMusics():Promise<Music>{
    return this.musicService.
  }



  @Post('musics')
  async getByName(@Query('name') name: string): Promise<Music[]> {
    
    return await this.musicService.getMusicByName(name);
  }
}