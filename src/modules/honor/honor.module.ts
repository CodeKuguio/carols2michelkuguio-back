import { Module } from '@nestjs/common';
import { HonorService } from './honor.service';
import { HonorController } from './honor.controller';
import { HonorRepository } from './honor.repository';

@Module({
  controllers: [HonorController],
  providers: [HonorService, HonorRepository],
})
export class HonorModule {}
