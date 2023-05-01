import { Column, Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { MusicEntity } from '../../music/entity/music.entity';

@Entity()
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  private: boolean;

  @ManyToOne(() => UserEntity, user => user.playlists)
  @JoinTable()
  user: UserEntity;

  @ManyToMany(() => MusicEntity, music => music.playlists)
  @JoinTable()
  music: MusicEntity[];
}
