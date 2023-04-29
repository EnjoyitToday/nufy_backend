import { MusicEntity } from 'src/music/entity/music.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MusicEntity)
export class MusicRepository extends Repository<MusicEntity> {

    async findByName(name: string): Promise<MusicEntity[]> {
        const query = `SELECT * FROM music WHERE name LIKE ?`;

        const results = await this.query(query, [`%${name}%`]);

        return results;
    }

    async findById(id: number):Promise<MusicEntity>{ 
        return this.findOne({ where: { id } })
    }
}
