import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHonorDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
