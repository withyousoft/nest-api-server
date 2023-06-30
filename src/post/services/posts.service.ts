import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import Post from '../entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PostNotFoundException from '../exception/post-not-found.exception';
import User from 'src/user/entities/user.entity';
import PostsSearchService from './posts-search.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private postsSearchService: PostsSearchService,
  ) {}

  async create(createPostDto: CreatePostDto, user?: User) {
    const newPost = await this.postRepository.create({
      ...createPostDto,
      author: user,
    });
    await this.postRepository.save(newPost);
    await this.postsSearchService.indexPost(newPost);
    return newPost;
  }

  async findAll() {
    return await this.postRepository.find({ relations: ['author'] });
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (post) {
      return post;
    }
    throw new PostNotFoundException(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    await this.postRepository.update(id, updatePostDto);
    const updatedPost = await this.postRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (updatedPost) {
      await this.postsSearchService.update(updatedPost);
      return updatedPost;
    }
    throw new PostNotFoundException(id);
  }

  async remove(id: number) {
    const deleteResponse = await this.postRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new PostNotFoundException(id);
    }
    await this.postsSearchService.remove(id);
  }

  async searchForPosts(text: string) {
    const results = await this.postsSearchService.search(text);
    const ids = results.map((result) => result.id);
  }
}
