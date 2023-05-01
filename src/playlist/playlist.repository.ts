import { DataSource, EntityRepository, Repository } from 'typeorm';
import { createPlaylistDto } from './dto/createPlaylist.dto';
import { PlaylistEntity } from './entity/playlist.entity';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user/entity/user.entity';

@Injectable()
export class PlaylistRepository extends Repository<PlaylistEntity> {

    constructor(private dataSource: DataSource) {
        super(PlaylistEntity, dataSource.createEntityManager());
    }

    async createByUserId(createObj: createPlaylistDto): Promise<void> {
        const { user_id, playlist_name } = createObj
    }

    async findById(id: number): Promise<PlaylistEntity> {
        return await this.findOne({ where: { id } })
    }

    async findByUser(user: UserEntity) {
        return await this.find({ where: { user } })
    }

}