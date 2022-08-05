import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getMe() {
    return {
      userId: 1,
      name: 'thien',
    };
  }
}
