import { EntityRepository, Repository } from 'typeorm';
import { createPlaylistDto } from './dto/createPlaylist.dto';
import { PlaylistEntity } from './entity/playlist.entity';

@EntityRepository(PlaylistEntity)
export class PlaylistRepository extends Repository<PlaylistEntity> {

    async createByUserId(createObj:createPlaylistDto):Promise<void>{
        const {user_id,playlist_name} = createObj
    }

    async findById(id: number):Promise<PlaylistEntity>{
        return this.findOne({ where: { id } })
    }
    
}