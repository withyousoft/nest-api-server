import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { PublicFileService } from 'src/file/public-file.service';
import { PrivateFileService } from 'src/file/private-file.service';
import UserNotFoundException from './exception/user-not-found.exception';

@Injectable()
export class UserService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly publicFileService: PublicFileService,
    private readonly privateFileService: PrivateFileService,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (user) {
      return user;
    }
    throw new UserNotFoundException(id);
  }

  async addAvatar(userId: number, imageBuffer: Buffer, filename: string) {
    const avatar = await this.publicFileService.uploadPublicFile(
      imageBuffer,
      filename,
    );
    const user = await this.getById(userId);
    await this.usersRepository.update(userId, {
      ...user,
      avatar,
    });
    return avatar;
  }

  async deleteAvatar(userId: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    const user = await this.getById(userId);
    const field = user.avatar?.id;
    if (field) {
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try {
        await queryRunner.manager.update(User, userId, {
          ...user,
          avatar: null,
        });
        await this.publicFileService.deletePublicFileWithQueryRunner(
          field,
          queryRunner,
        );
        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw new InternalServerErrorException();
      } finally {
        await queryRunner.release();
      }
    }
  }

  async addPrivateFile(userId: number, imageBuffer: Buffer, filename: string) {
    return this.privateFileService.uploadPrivateFile(
      imageBuffer,
      userId,
      filename,
    );
  }

  async getPrivateFile(userId: number, fileId: number) {
    const file = await this.privateFileService.getPrivateFile(fileId);
    if (file.info.owner.id === userId) {
      return file;
    }
    throw new UnauthorizedException();
  }

  async getAllPrivateFiles(userId: number) {
    const userWithFiles = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['files'],
    });
    if (userWithFiles) {
      return Promise.all(
        userWithFiles.files.map(async (file) => {
          const url = await this.privateFileService.generatePresignedUrl(
            file.key,
          );
          return {
            ...file,
            url,
          };
        }),
      );
    }
    throw new NotFoundException('User with this id does not exist');
  }

  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersRepository.update(userId, { currentHashedRefreshToken });
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.getById(userId);
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }

  async removeRefreshToken(userId: number) {
    return this.usersRepository.update(userId, {
      currentHashedRefreshToken: null,
    });
  }

  async setTwoFactorAuthenticationSecret(secret: string, userId: number) {
    return this.usersRepository.update(userId, {
      twoFactorAuthenticationSecret: secret,
    });
  }

  async turnOnTwoFactorAuthentication(userId: number) {
    return this.usersRepository.update(userId, {
      isTwoFactorAuthenticationEnabled: true,
    });
  }

  async markEmailAsConfirmed(email: string) {
    return this.usersRepository.update({ email }, { isEmailConfirmed: true });
  }
}
