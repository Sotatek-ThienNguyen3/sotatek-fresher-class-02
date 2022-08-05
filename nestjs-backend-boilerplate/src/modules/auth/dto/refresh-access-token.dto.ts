import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshAccessTokenDto {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
  })
  accessToken: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
  })
  refreshToken: string;
}
