import { Injectable } from '@nestjs/common';
import { Honor, Prisma } from '@prisma/client';
import { HonorRepository } from './honor.repository';

@Injectable()
export class HonorService {
  constructor(private honorRepository: HonorRepository) {}

  async create(data: Prisma.HonorCreateInput[]): Promise<Honor[]> {
    return this.honorRepository.create(data);
  }

  async findAll(): Promise<Honor[]> {
    return this.honorRepository.findAll();
  }
}
