import { UserEntity } from 'src/user/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

    findByEmail(email: string): Promise<UserEntity | undefined> {
        return this.findOne({ where: { email } });
    }

    findById(id: number): Promise<UserEntity | undefined> {
        return this.findOne({ where: { id } });
    }
}
