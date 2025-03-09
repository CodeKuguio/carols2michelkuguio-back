import { Module } from '@nestjs/common';
import { HonorService } from './honor.service';
import { HonorController } from './honor.controller';

@Module({
  controllers: [HonorController],
  providers: [HonorService],
})
export class HonorModule {}
