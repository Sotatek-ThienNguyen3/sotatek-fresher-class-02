import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    example: '0x9d22c4c254674c748e338a0fd5a7c15c4dbde2b4',
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    required: true,
    example:
      '0x02dc716209618c04e606d3a13cd21a86ab05154cf5c78ce0122a9bf1da05f96f480fb2806f32c1c2d61cc3850028a5268c2fc4f952bfa17bbbf1d4993c8302d31b',
  })
  @IsNotEmpty()
  signature: string;

  @ApiProperty({
    required: true,
    example: 'Sign this message to login with address 0x9d22c4c254674c748e338a0fd5a7c15c4dbde2b4',
  })
  @IsNotEmpty()
  message: string;
}
