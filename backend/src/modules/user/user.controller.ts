import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

// GET POST PUT PATCH DELETE

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  async getMe() {
    const userId = 10;
    const data = this.userService.getUserById(userId);
    return data;
  }
}
