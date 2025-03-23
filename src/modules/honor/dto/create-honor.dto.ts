import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHonorDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;
}
