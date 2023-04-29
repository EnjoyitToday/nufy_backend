
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; 
import { ConfigService } from "@nestjs/config";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private configService: ConfigService,
     ){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
 
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async validateRequest(request: Request){
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Unauthorized');
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: this.configService.get['JWT_SECRET']
        }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      console.log(payload)
      request.headers['user_id'] = payload
      // request.headers['userId'] = Number(payload);//tem q verificar o que 
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}

