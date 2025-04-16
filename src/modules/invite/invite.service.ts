import { Injectable } from '@nestjs/common';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { InviteRepository } from './invite.repository';

@Injectable()
export class InviteService {
  constructor(private readonly inviteRepository: InviteRepository) {}
  async create(createInviteDto: CreateInviteDto) {
    return this.inviteRepository.create(createInviteDto);
  }
  findOne(phone: string) {
    return this.inviteRepository.findOne(phone);
  }
  findOneByUUID(uuid: string) {
    return this.inviteRepository.findOneByUUID(uuid);
  }

  update(id: number, updateInviteDto: UpdateInviteDto) {
    return this.inviteRepository.update(id, updateInviteDto);
  }
}
