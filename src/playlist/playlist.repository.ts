import { Playlist } from 'src/playlist/entity/playlist.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Playlist)
export class PlaylistRepository extends Repository<Playlist> {
}