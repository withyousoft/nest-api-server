import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from './entities/post.entity';
import PostsSearchService from './services/posts-search.service';
import { SearchModule } from 'src/search/search.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: 120,
      }),
    }),
    TypeOrmModule.forFeature([Post]),
    SearchModule,
    EmailModule,
  ],
  controllers: [PostController],
  providers: [PostsService, PostsSearchService],
})
export class PostModule {}
