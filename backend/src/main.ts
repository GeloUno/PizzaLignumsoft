import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = process.env.APP_PORT || configService.get('APP_PORT');
  app.setGlobalPrefix('/api');
  await app.listen(port);
}
bootstrap();
