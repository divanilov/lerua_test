import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';
import configuration from './config/configuration';
const env = process.env.NODE_ENV || 'development';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api/v${configuration[env].apiVersion}`, {
    exclude: [{ path: 'alive', method: RequestMethod.GET }],
  });
  await app.listen(configuration.global.port);
}
bootstrap();
