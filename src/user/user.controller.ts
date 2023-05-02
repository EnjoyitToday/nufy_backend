import { Body, Controller, Post, Put, Headers, UseGuards, Get, Patch } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserEntity } from "src/user/entity/user.entity";
import { AuthGuard } from "src/commom/auth.guard";
import { UserAuth } from "../playlist/dto/userAuth";
import { UserDto } from "./dto/user.dto";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @UseGuards(AuthGuard)
  @Get()
  async getUser(@Headers('user_id') userId: UserAuth): Promise<UserDto> {
    return await this.userService.findById(userId.userId);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Patch('username')
  async updateUsername(@Body() username: string): Promise<UserEntity> {
    return;
  }

  @UseGuards(AuthGuard)
  @Patch('email')
  async updateEmail(@Body() email: string): Promise<UserEntity> {
    return;
  }

  @UseGuards(AuthGuard)
  @Patch('password')
  async updatePassword(@Body() password: string): Promise<UserEntity> {
    return;
  }

}