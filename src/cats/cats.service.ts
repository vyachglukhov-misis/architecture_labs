import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class CatsService {
  constructor(
    private readonly catRepository: CatsRepository,
    private readonly cacheService: CacheService,
  ) {}

  async createCat(createCatDto: CreateCatDto) {
    const cat = await this.catRepository.create(createCatDto);
    await this.cacheService.del('all_cats');
    return cat;
  }

  async findAll() {
    const cachedCats = await this.cacheService.get('all_cats');
    if (cachedCats) {
      return cachedCats;
    }

    const cats = await this.catRepository.findAll();
    await this.cacheService.set('all_cats', cats);
    return cats;
  }
}
