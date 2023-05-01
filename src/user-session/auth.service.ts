import { UserService } from 'src/user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,

  ) { }

  async login(name: string, password: string): Promise<{ accessToken: string }> {
    const user: UserEntity = await this.userService.findByUsername(name);
    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos.');
    }

    const isPasswordMatch: boolean = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Email ou senha incorretos.');
    }

    const payload = { userId: user.id };
    const accessToken = this.jwtService.sign(payload, {
      privateKey: this.configService.get<string>('JWT_SECRET')
    });

    return { accessToken: `Bearer ${accessToken}` };
  }
}
