import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Album } from './album.entity';

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  composer: string;

  @Column()
  timestamp: string;

  @Column()
  path: string;

  @ManyToOne(() => Album, album => album.musicas)
  album: Album;
}
