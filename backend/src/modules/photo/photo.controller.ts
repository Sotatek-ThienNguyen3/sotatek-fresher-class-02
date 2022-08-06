import { Controller, Get } from '@nestjs/common';
import { PhotoService } from 'src/modules/photo/photo.service';
import { UserService } from 'src/modules/user/user.service';

// GET POST PUT PATCH DELETE

@Controller('photo')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
    private readonly userService: UserService,
  ) {}
  @Get('/')
  async getMe() {
    return {
      // user: this.userService.getMe(),
      photo: this.photoService.getPhotoById(),
    };
  }
}
