import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/entity/user.entity';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class UserRepository extends Repository<UserEntity> {

    constructor(private dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    findByEmail(email: string): Promise<UserEntity | undefined> {
        return this.findOne({ where: { email } });
    }

    findById(id: number): Promise<UserEntity | undefined> {
        return this.findOne({ where: { id } });
    }
}
