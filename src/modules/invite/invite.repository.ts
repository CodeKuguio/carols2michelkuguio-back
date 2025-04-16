import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class InviteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInviteDto: CreateInviteDto) {
    const {
      users: usersBase,
      userIds: userIdsBase,
      ...restCreat
    } = createInviteDto;
    const userIds = userIdsBase?.map((id) => ({ id })) || [];
    const userDtos = usersBase || [];
    const connectedUsers = userIds?.length > 0 ? { connect: userIds } : {};
    const createUsers =
      userDtos?.length > 0
        ? {
            createMany: {
              data: userDtos,
            },
          }
        : {};
    const users =
      userIds.length + userDtos.length > 0
        ? { users: { ...connectedUsers, ...createUsers } }
        : {};
    return await this.prisma.invite.create({
      data: {
        ...restCreat,
        ...users,
      },
    });
  }

  async findOne(phone: string) {
    const sanitizedPhone = phone.replace(/\D/g, '');

    const invite = await this.prisma.invite.findFirst({
      where: {
        users: {
          some: {
            phone: {
              contains: sanitizedPhone,
              mode: 'insensitive',
            },
          },
        },
      },
      include: {
        users: {
          include: {
            honor: true,
          },
        },
      },
    });

    if (!invite) {
      throw new NotFoundException(
        `Não encontramos nenhum convite associado ao telefone "${sanitizedPhone}"`,
      );
    }

    return invite;
  }
  async findOneByUUID(uuid: string) {
    const invite = await this.prisma.invite.findFirst({
      where: {
        uuid: uuid,
      },
      include: {
        users: {
          include: {
            honor: true,
          },
        },
      },
    });

    if (!invite) {
      throw new NotFoundException(
        `Não encontramos nenhum convite`,
      );
    }

    return invite;
  }

  update(id: number, updateInviteDto: UpdateInviteDto) {
    let { users, confirmation } = updateInviteDto;
    if (confirmation !== undefined && !confirmation) {
      users = users.map((user) => ({ ...user, confirmation: false }));
    } else if (users.every((user) => user.confirmation === false)) {
      confirmation = false;
    } else if (users.some((user) => user.confirmation === true)) {
      confirmation = true;
    }

    return this.prisma.invite.update({
      data: {
        confirmation,
        users: {
          update: users.map((user) => ({
            where: { id: user.id }, // Identifica o usuário pelo ID
            data: user,
          })),
        },
      },
      where: { id },
    });
  }
}
