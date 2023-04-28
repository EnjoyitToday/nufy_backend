import { Body, Controller, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entity/user.entity";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Put('username')
  async updateUsername(@Body() username:string ):Promise<User>{
    return;
  }

  @Put('email')
  async updateEmail(@Body() email:string ):Promise<User>{
    return;
  }

  @Put('password')
  async updatePassword(@Body() password:string ):Promise<User>{
    return;
  }
}