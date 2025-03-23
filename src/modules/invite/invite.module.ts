import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteController } from './invite.controller';
import { PrismaService } from '../../prisma.service';
import { InviteRepository } from './invite.repository';

@Module({
  controllers: [InviteController],
  providers: [InviteService, InviteRepository],
})
export class InviteModule {}
