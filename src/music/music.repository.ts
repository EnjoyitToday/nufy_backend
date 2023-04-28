import { Music } from 'src/music/entity/music.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Music)
export class MusicRepository extends Repository<Music> {
    findByName(name: string): Promise<Music[]> {
        const query = `SELECT * FROM music WHERE name LIKE ?`;

        const results = await this.query(query, [`%${name}%`]);

        return results;
    }
}
