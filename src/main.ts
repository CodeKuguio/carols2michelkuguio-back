import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Carolina e Michel Kuguio')
    .setDescription('Aplicação Backend Carolina e Michel Kuguio')
    .setVersion('1.0')
    .build();

  const port = configService.get<number>('PORT') || 3000;
  const apiPrefix = configService.get<string>('API_PREFIX') || 'api';

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(apiPrefix, app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);

  console.log(`Application is running on ${await app.getUrl()}`);
}

bootstrap();
