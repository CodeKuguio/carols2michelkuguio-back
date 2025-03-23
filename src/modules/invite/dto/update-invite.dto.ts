import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';
import { CreateInviteDto } from './create-invite.dto';
import { UpdateUserDto } from '../../users/dto/update-user.dto';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class UsersUpdateDto extends UpdateUserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;
}

export class UpdateInviteDto extends PartialType(
  OmitType(CreateInviteDto, ['users', 'userIds']),
) {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsersUpdateDto)
  @ApiProperty({ type: UsersUpdateDto, isArray: true })
  users: UsersUpdateDto[];
}
