import { Injectable } from '@nestjs/common';
import { MusicEntity } from 'src/music/entity/music.entity';
import { DataSource, EntityRepository, Repository } from 'typeorm';

@Injectable()
export class MusicRepository extends Repository<MusicEntity> {

    constructor(private dataSource: DataSource) {
        super(MusicEntity, dataSource.createEntityManager());
    }

    async findByName(name: string): Promise<MusicEntity[]> {
        const query = `SELECT * FROM music WHERE name LIKE ?`;

        const results = await this.query(query, [`%${name}%`]);

        return results;
    }

    async findById(id: number): Promise<MusicEntity> {
        return this.findOne({ where: { id } })
    }
}
