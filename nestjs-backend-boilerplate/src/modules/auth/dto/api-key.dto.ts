import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteApiKeyDto {
  @ApiProperty({
    required: true,
    example: '',
  })
  @IsNotEmpty()
  readonly apiKey: string;
}
