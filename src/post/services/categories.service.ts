import { Injectable } from '@nestjs/common';
import Post from '../entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Category from '../entities/category.entity';
import CategoryNotFoundException from '../exception/category-not-found.exception';
import UpdateCategoryDto from '../dto/update-category.dto';
import CreateCategoryDto from '../dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Post)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async findAll() {
    return await this.categoryRepository.find({ relations: ['posts'] });
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
    if (category) {
      return category;
    }
    throw new CategoryNotFoundException(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update(id, updateCategoryDto);
    const updatedCategory = await this.categoryRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new CategoryNotFoundException(id);
  }

  async remove(id: number) {
    const deleteResponse = await this.categoryRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new CategoryNotFoundException(id);
    }
  }
}
