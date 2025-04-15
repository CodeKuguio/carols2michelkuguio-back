import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@Controller('invite')
@UseGuards(AuthGuard)
@ApiBearerAuth('access-token')
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  @Post()
  create(@Body() createInviteDto: CreateInviteDto) {
    return this.inviteService.create(createInviteDto);
  }

  @Get(':phone')
  findOne(@Param('phone') phone: string) {
    return this.inviteService.findOne(phone);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInviteDto: UpdateInviteDto) {
    return this.inviteService.update(+id, updateInviteDto);
  }
}
