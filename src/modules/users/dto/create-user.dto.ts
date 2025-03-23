import {
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  phone?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  inviteId?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  honorId?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  confirmation?: boolean;
}
