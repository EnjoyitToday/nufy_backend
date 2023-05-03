import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { AlbumEntity } from '../../album/entity/album.entity';
import { PlaylistEntity } from '../../playlist/entity/playlist.entity';

@Entity({ name: 'MUSIC' })
export class MusicEntity {
  @PrimaryGeneratedColumn({ name: 'ID_MUSIC' })
  id: number;

  @Column({ name: 'NAME', length: 50, nullable: false })
  name: string;

  @Column({ name: 'PHOTO_PATH', length: 50, nullable: false })
  photo: string;

  @Column({ name: 'COMPOSER', length: 50, nullable: false })
  composer: string;

  @Column({ name: 'TIMESTAMP', length: 50, nullable: false })
  timestamp: string;

  @Column({ name: 'MUSIC_PATH', length: 50, nullable: false })
  path: string;

  @ManyToOne(() => AlbumEntity, album => album.music,{eager:true})
  @JoinTable()
  album: AlbumEntity;

  @ManyToMany(() => PlaylistEntity, playlist => playlist.music)
  @JoinTable()
  playlists: PlaylistEntity
}
