import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PrismaService } from '../database/prisma/prisma.service';
import { CatsRepository } from './cats.repository';

@Module({
  providers: [CatsService, CatsRepository, PrismaService],
  controllers: [CatsController],
})
export class CatsModule {}
