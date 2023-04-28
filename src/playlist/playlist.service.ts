import { Injectable } from '@nestjs/common'; 
import { PlaylistRepository } from './playlist.repository';
import { PlaylistEntity } from './entity/playlist.entity';

@Injectable()
export class PlaylistService {
  constructor(
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async getPlaylistByName(name: string): Promise<PlaylistEntity[]> {
    const playlists:PlaylistEntity[] = await this.playlistRepository.find({where:name});
 
    return playlists;
  }
}
