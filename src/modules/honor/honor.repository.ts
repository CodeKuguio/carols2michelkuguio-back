import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { HonorEntity } from './entities/honor.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class HonorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<HonorEntity[]> {
    const honors = await this.prisma.honor.findMany();
    return honors.map((honor) => new HonorEntity(honor));
  }

  async create(data: Prisma.HonorCreateManyInput[]): Promise<HonorEntity[]> {
    const honors = await this.prisma.honor.createManyAndReturn({ data });
    return honors.map((honor) => new HonorEntity(honor));
  }
}
