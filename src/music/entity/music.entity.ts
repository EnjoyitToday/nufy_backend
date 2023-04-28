import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { AlbumEntity } from '../../album/entity/album.entity';
import { PlaylistEntity } from '../../playlist/entity/playlist.entity';

@Entity({name:'MUSIC'})
export class MusicEntity {
  @PrimaryGeneratedColumn({name:'ID_MUSIC'})
  id: number;

  @Column({name:'NAME'})
  name: string;

  @Column({name:'PHOTO_PATH'})
  photo: string;

  @Column({name:'COMPOSER'})
  composer: string;

  @Column()
  timestamp: string;

  @Column()
  path: string;

  @ManyToOne(() => AlbumEntity, album => album.music)
  album: AlbumEntity;  
  
  @ManyToMany(() => PlaylistEntity, playlist => playlist.musics)
  playlists: PlaylistEntity
}
