import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import getLogLevels from './utils/get-log-levels';
import CustomLogger from './logger/custom-logger';
// import { runInCluster } from './run-in-cluster';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getLogLevels(process.env.NODE_ENV == 'production'),
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.use(cookieParser());
  app.useLogger(app.get(CustomLogger));
  await app.listen(4000, () => {
    Logger.log('server is running on port 4000');
  });
}
// runInCluster(bootstrap);
bootstrap();
