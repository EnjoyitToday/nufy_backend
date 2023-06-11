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
    console.log(createUserDto)
    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Put()
  async update(@Headers('user_id') userId: UserAuth, @Body() user: UserDto): Promise<UserEntity> {
    console.log(user)
    await this.userService.update(userId.userId, user)
    return;
  }

}