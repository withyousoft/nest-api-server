import { Module } from '@nestjs/common';
import { OptimizeController } from './optimize.controller';
import { BullModule } from '@nestjs/bull';
import { ImageProcessor } from './optimize.process';
import { join } from 'path';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'image',
      processors: [
        { name: 'optimize', path: join(__dirname, 'image.processor.js') },
      ],
    }),
  ],
  providers: [ImageProcessor],
  exports: [],
  controllers: [OptimizeController],
})
export class OptimizeModule {}
