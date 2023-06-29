import User from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Category from './category.entity';

@Entity()
class Post {
  @PrimaryGeneratedColumn({ unsigned: true })
  public id: number;

  @Column()
  public content: string;

  @Column('json')
  public paragraphs: string[];

  @Column()
  public title: string;

  @Index()
  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @ManyToMany(() => Category, (category: Category) => category.posts, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  public categories: Category[];
}

export default Post;
