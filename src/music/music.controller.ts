import { MusicEntity } from 'src/music/entity/music.entity';
import { MusicService } from './music.service';
import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('musics')
export class MusicController {
  constructor(private readonly musicService: MusicService) { }

  // @Get()
  // async getMusics():Promise<MusicEntity>{
  //   // return this.musicService.getMusics();
  // }

  @Get()
  async getMusicByName(@Query('music_name') music_name: string): Promise<MusicEntity[]> {
    return this.musicService.getMusicByName(music_name)
  }

  //add criar musica
}
