import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  HttpCode,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import RequestWithUser from 'src/authentication/request-with-user.interface';
import { PaginationParams } from 'src/utils/pagination-params';
import { CacheInterceptor } from '@nestjs/cache-manager';
// import JwtTwoFactorGuard from 'src/authentication/guard/jwt-two-factor.guard';
import JwtAuthenticationGuard from 'src/authentication/guard/jwt-authentication.guard';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('post')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @HttpCode(200)
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() createPostDto: CreatePostDto, @Req() req: RequestWithUser) {
    return this.postsService.create(createPostDto, req.user);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll(
    @Query('search') search: string,
    @Query() { offset, limit }: PaginationParams,
  ) {
    if (search) {
      return this.postsService.searchForPosts(search, offset, limit);
    }
    return this.postsService.findAll(offset, limit);
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a post that exists in the database',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'A post has been successfully fetched',
    type: Post,
  })
  @ApiResponse({
    status: 404,
    description: 'A post with given id does not exist.',
  })
  @UseInterceptors(CacheInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
