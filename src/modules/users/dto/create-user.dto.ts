import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  phone?: string;

  @IsNumber()
  inviteId?: number;

  @IsNumber()
  honorId?: number;

  @IsBoolean()
  confirmation?: boolean;
}
