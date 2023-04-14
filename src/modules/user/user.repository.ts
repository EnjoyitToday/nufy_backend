import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByEmail(email: string): Promise<User | undefined> {
        return this.findOne({ where: { email } });
    }
}
