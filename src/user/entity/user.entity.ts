import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlaylistEntity } from '../../playlist/entity/playlist.entity';

@Entity({ name: 'USER' })
export class UserEntity {

  @PrimaryGeneratedColumn({ name: 'ID_USER' })
  id: number;

  @Column({ name: 'USERNAME', length: '50', nullable: false })
  username: string;

  @Column({ name: 'EMAIL', length: '50', nullable: false })
  email: string;

  @Column({ name: 'PASSWORD', length: '250', nullable: false })
  password: string;

  @OneToMany(() => PlaylistEntity, playlist => playlist.user, { eager: true })
  playlists: PlaylistEntity[];
}
