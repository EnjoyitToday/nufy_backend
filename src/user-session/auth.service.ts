import { UserService } from 'src/user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common'; 
import * as bcrypt from 'bcryptjs';
import { UserEntity } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const user: UserEntity = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos.');
    }

    const isPasswordMatch: boolean = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Email ou senha incorretos.');
    }

    const payload = { userId: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
