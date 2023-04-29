import { User } from 'src/user/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    findByEmail(email: string): Promise<User | undefined> {
        return this.findOne({ where: { email } });
    }

    findById(id: number): Promise<User | undefined> {
        return this.findOne({ where: { id } });
    }
}
