import { Module } from '@nestjs/common';
import { PublicFileService } from './public-file.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import PublicFile from './entities/public-file.entity';
import { PrivateFileService } from './private-file.service';
import PrivateFile from './entities/private-file.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([PublicFile, PrivateFile])],
  controllers: [],
  providers: [PublicFileService, PrivateFileService],
  exports: [PublicFileService, PrivateFileService],
})
export class FileModule {}
