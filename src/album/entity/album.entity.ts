import { MusicEntity } from 'src/music/entity/music.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pictureUrl: string;
  //assets/album/*.svg

  @OneToMany(() => MusicEntity, music => music.album)
  music: MusicEntity[];

}
