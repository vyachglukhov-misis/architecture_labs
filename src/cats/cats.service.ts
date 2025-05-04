import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(private readonly catRepository: CatsRepository) {}

  async createCat(createCatDto: CreateCatDto) {
    return await this.catRepository.create(createCatDto);
  }
  async findAll() {
    return await this.catRepository.findAll();
  }
}
