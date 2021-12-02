import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup(
    'docs',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder().setTitle('Videos TDD').build(),
    ),
  );
  await app.listen(3333);
}
bootstrap();
