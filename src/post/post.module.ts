import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from './entities/post.entity';
import PostsSearchService from './services/posts-search.service';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), SearchModule],
  controllers: [PostController],
  providers: [PostsService, PostsSearchService],
})
export class PostModule {}
