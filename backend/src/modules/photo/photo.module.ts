import { Module } from '@nestjs/common';
import { PhotoController } from 'src/modules/photo/photo.controller';
import { PhotoService } from 'src/modules/photo/photo.service';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [UserModule],
  exports: [],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
