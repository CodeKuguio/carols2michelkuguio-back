import { CreateUserDto } from '../../users/dto/create-user.dto';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInviteDto {
  @IsOptional()
  @ApiPropertyOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  userIds?: number[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  @ApiPropertyOptional({ type: CreateUserDto, isArray: true })
  users?: CreateUserDto[];

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  confirmation?: boolean;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  expirationDate: Date;
}
