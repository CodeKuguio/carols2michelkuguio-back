import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { HonorService } from './honor.service';
import { CreateHonorDto } from './dto/create-honor.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@Controller('honor')
@UseGuards(AuthGuard)
@ApiBearerAuth('access-token')
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
