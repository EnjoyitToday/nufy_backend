import { User } from './entity/user.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { genSaltSync, hashSync } from "bcryptjs";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findByEmail(email);
  }
  
  async findById(userId: number): Promise<User | undefined> {
    return await this.userRepository.findById(userId);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;

    if (!email.match(/\S+@\S+\.\S+/)) {
      throw new ConflictException('E-mail inválido');
    }

    if (password.length < 8) {
      throw new ConflictException('A senha deve ter pelo menos 8 caracteres');
    }

    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new ConflictException('Usuário já existe');
    }

    const salt = genSaltSync();
    const hashedPassword = hashSync(password, salt);

    const user = this.userRepository.create({ username, email, password:hashedPassword });

    return await this.userRepository.save(user);
  }
}
