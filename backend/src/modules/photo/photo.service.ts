import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotoService {
  getPhotoById() {
    return {
      photoId: 1,
      link: 'https://',
    };
  }
}
