import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Honor, Prisma } from '@prisma/client';

@Injectable()
export class HonorService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.HonorCreateInput): Promise<Honor> {
    return this.prisma.honor.create({
      data,
    });
  }

  async findAll(): Promise<Honor[]> {
    return this.prisma.honor.findMany();
  }
}
