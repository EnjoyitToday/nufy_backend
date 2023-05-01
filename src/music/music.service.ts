import { UserService } from 'src/user/user.service';
import { Get, Injectable, UnauthorizedException } from '@nestjs/common'; 
import {  MusicEntity } from 'src/music/entity/music.entity';
import { MusicRepository } from './music.repository';

@Injectable()
export class MusicService {
  constructor(
    private readonly musicRepository: MusicRepository,
  ) {}

  // @Get()
  // async getMusics():Promise<MusicEntity>{
  //   this.musicRepository.
  // }

  @Get()
  async getMusicByName(music_name:string):Promise<MusicEntity[]>{
    return this.musicRepository.findByName(music_name);
  }

  // async getMusicByName(name: string): Promise<Music[]> {
    // const musics: Music[] = await this.musicRepository.find(name);
 
    // return musics;
  // }
}
