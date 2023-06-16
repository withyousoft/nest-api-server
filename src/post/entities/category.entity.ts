import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Post from './post.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn({ unsigned: true })
  public id: number;

  @Column()
  public name: string;

  @ManyToMany(() => Post, (post: Post) => post.categories)
  public posts: Post[];
}

export default Category;
