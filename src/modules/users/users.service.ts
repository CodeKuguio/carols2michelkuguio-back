import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersRepository.update(id, updateUserDto);
  }
}
