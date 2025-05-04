import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsRepository {
  constructor(private prismaRepository: PrismaService) {}

  async create(createCatDto: CreateCatDto) {
    return this.prismaRepository.cat.create({ data: createCatDto });
  }
  async findAll() {
    return this.prismaRepository.cat.findMany();
  }
}
