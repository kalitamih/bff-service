import { Module } from '@nestjs/common';
import { BffService } from './bff.service';
import { BffController } from './bff.controller';
import { CacheService } from './cache.service';

@Module({
  providers: [BffService,  CacheService],
  controllers: [BffController]
})
export class BffModule {}
