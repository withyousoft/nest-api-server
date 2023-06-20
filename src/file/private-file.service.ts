import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import PrivateFile from './entities/private-file.entity';
import { S3 } from 'aws-sdk';

@Injectable()
export class PrivateFileService {
  constructor(
    @InjectRepository(PrivateFile)
    private privateFileRepository: Repository<PrivateFile>,
    private readonly configService: ConfigService,
  ) {}

  public async uploadPrivateFile(
    dataBuffer: Buffer,
    ownerId: number,
    fileName: string,
  ) {
    const s3 = new S3({
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
      region: this.configService.get('AWS_REGION'),
      endpoint: this.configService.get('AWS_S3_BUCKET_ENDPOINT'),
      signatureVersion: 'v4',
    });

    const uploadResult = await s3
      .upload({
        Bucket: this.configService.get('AWS_S3_PRIVATE_BUCKET_NAME'),
        Body: dataBuffer,
        Key: `${uuid()}-${fileName}`,
      })
      .promise();

    const newPrivateFile = this.privateFileRepository.create({
      key: uploadResult.Key,
      owner: {
        id: ownerId,
      },
    });

    await this.privateFileRepository.save(newPrivateFile);
    return newPrivateFile;
  }

  public async getPrivateFile(fileId: number) {
    const s3 = new S3({
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
      region: this.configService.get('AWS_REGION'),
      endpoint: this.configService.get('AWS_S3_BUCKET_ENDPOINT'),
      signatureVersion: 'v4',
    });

    const fileInfo = await this.privateFileRepository.findOne({
      where: { id: fileId },
      relations: ['owner'],
    });

    if (fileInfo) {
      const stream = await s3
        .getObject({
          Bucket: this.configService.get('AWS_S3_PRIVATE_BUCKET_NAME'),
          Key: fileInfo.key,
        })
        .createReadStream();
      return {
        stream,
        info: fileInfo,
      };
    }
    throw new NotFoundException();
  }

  public async generatePresignedUrl(key: string) {
    const s3 = new S3({
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
      region: this.configService.get('AWS_REGION'),
      endpoint: this.configService.get('AWS_S3_BUCKET_ENDPOINT'),
      signatureVersion: 'v4',
    });

    return s3.getSignedUrlPromise('getObject', {
      Bucket: this.configService.get('AWS_S3_PRIVATE_BUCKET_NAME'),
      Key: key,
    });
  }
}
