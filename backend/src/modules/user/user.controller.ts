import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

// GET POST PUT PATCH DELETE

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/me')
  async getMe() {
    const data = this.userService.getMe();
    return data;
  }
}
