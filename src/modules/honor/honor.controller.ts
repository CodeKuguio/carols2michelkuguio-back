import { Body, Controller, Get, Post } from '@nestjs/common';
import { HonorService } from './honor.service';
import { CreateHonorDto } from './dto/create-honor.dto';

@Controller('honor')
export class HonorController {
  constructor(private readonly honorService: HonorService) {}

  @Post()
  create(@Body() createHonorDto: CreateHonorDto) {
    return this.honorService.create(createHonorDto);
  }

  @Get()
  findAll() {
    return this.honorService.findAll();
  }
}
