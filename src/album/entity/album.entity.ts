import { MusicEntity } from 'src/music/entity/music.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => MusicEntity, music => music.album)
  music: MusicEntity[];

}
