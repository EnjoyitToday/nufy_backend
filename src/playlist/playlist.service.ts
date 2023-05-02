import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PlaylistRepository } from './playlist.repository';
import { PlaylistEntity } from './entity/playlist.entity';
import { createPlaylistDto } from './dto/createPlaylist.dto';
import { UserRepository } from 'src/user/user.repository';
import { AddMusicToPlaylistDto } from './dto/addMusicToPlaylist.dto';
import { DeleteMusicFromPlaylistDto } from './dto/deleteMusicFromPlaylist.dto';
import { MusicRepository } from 'src/music/music.repository';

@Injectable()
export class PlaylistService {
  constructor(
    private readonly playlistRepository: PlaylistRepository,
    private readonly usersRepository: UserRepository,
    private readonly musicRepository: MusicRepository,

  ) { }

  async getAll(): Promise<PlaylistEntity[]> {
    const playlists: PlaylistEntity[] = await this.playlistRepository.find();

    return playlists;
  }

  async findById(id: number): Promise<PlaylistEntity> {
    const playlist = await this.playlistRepository.findById(id)

    return playlist
  }

  async findUserPlaylists(userId: number): Promise<PlaylistEntity[]> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new NotFoundException('User not found.')
    }

    const playlists: PlaylistEntity[] = await this.playlistRepository.findByUser(user);

    return playlists;
  }
  async createPlaylist(createPlaylist: createPlaylistDto): Promise<PlaylistEntity> {
    const user = await this.usersRepository.findById(createPlaylist.user_id)
    if (!user) {
      throw new BadRequestException("User doesn't exists.");
    }

    if (!createPlaylist.playlist_name) {
      throw new BadRequestException("Invalid playlist name.");
    }

    const playlist = <PlaylistEntity>{
      isPrivate: true,
      name: createPlaylist.playlist_name,
      user: user,
    }

    const createdPlaylist = await this.playlistRepository.save(playlist)

    return createdPlaylist;
  }

  async addMusicOnPlaylist(addMusic: AddMusicToPlaylistDto): Promise<PlaylistEntity> {
    // implementar ainda pq agora to sem typeorm e nest
    const playlist = await this.playlistRepository.findById(addMusic.playlist_id)

    const music = await this.musicRepository.findById(addMusic.playlist_id)

    playlist.music.push(music);

    return await this.playlistRepository.save(playlist)
  }

  async deleteMusicFromPlaylist(delMusic: DeleteMusicFromPlaylistDto): Promise<PlaylistEntity> {
    const playlist = await this.playlistRepository.findById(delMusic.playlist_id)

    const music = playlist.music.find(music => music.id == delMusic.music_id)

    if (!music) {
      throw new BadRequestException("Music doesn't exists.");
    }

    playlist.music.splice(playlist.music.indexOf(music), 1)

    return await this.playlistRepository.save(playlist)
  }


}
