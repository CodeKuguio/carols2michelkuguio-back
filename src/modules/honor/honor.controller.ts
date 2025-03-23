import { Body, Controller, Get, Post } from '@nestjs/common';
import { HonorService } from './honor.service';
import { CreateHonorDto } from './dto/create-honor.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('honor')
export class HonorController {
  constructor(private readonly honorService: HonorService) {}

  @Post()
  @ApiBody({ type: CreateHonorDto, isArray: true })
  create(@Body() createHonorDto: CreateHonorDto[]) {
    return this.honorService.create(createHonorDto);
  }

  @Get()
  findAll() {
    return this.honorService.findAll();
  }
}
