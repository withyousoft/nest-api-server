import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Address from './address.entity';
import Post from 'src/post/entities/post.entity';
import PublicFile from 'src/file/entities/public-file.entity';
import PrivateFile from 'src/file/entities/private-file.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @Column()
  public name: string;

  @Column()
  @Exclude()
  public password: string;

  @OneToOne(() => Address, { eager: true, cascade: true })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts: Post[];

  @JoinColumn()
  @OneToOne(() => PublicFile, { eager: true, nullable: true })
  public avatar?: PublicFile;

  @OneToMany(() => PrivateFile, (file: PrivateFile) => file.owner)
  public files: PrivateFile[];

  @Column({ nullable: true })
  public twoFactorAuthenticationSecret?: string;

  @Column({ default: false })
  public isTwoFactorAuthenticationEnabled: boolean;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;
}

export default User;
