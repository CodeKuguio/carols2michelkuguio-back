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
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    ) // Adiciona suporte para Bearer Token no Swagger
    .build();

  const port = configService.get<number>('PORT') || 3000;
  const apiPrefix = configService.get<string>('API_PREFIX') || 'api';

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(apiPrefix, app, documentFactory);

  app.enableCors({
    origin: '*', // Permite qualquer origem, mas você pode especificar URLs específicas
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos na requisição
  });

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
