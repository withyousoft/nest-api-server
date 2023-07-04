import { Module } from '@nestjs/common';
import HealthController from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { ElasticsearchHealthIndicator } from './elasticsearch-health-indicator';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [TerminusModule, HttpModule, SearchModule],
  controllers: [HealthController],
  providers: [ElasticsearchHealthIndicator],
})
export default class HealthModule {}
