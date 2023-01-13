import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateAppDataDto {
  @IsString()
  @Length(1, 255)
  @ApiProperty()
  name: string;
}
