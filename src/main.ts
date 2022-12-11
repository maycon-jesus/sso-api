import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('SSO Maycon Jesus')
    .setDescription('Single sign-on desenvolvido por Maycon Jesus')
    .setVersion('1.0')
    .addServer('https://sso-api.mayconjesus.dev', 'Production')
    .addServer('https://staging-sso-api.mayconjesus.dev/', 'Staging')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'API SSO - Maycon Jesus',
  });

  await app.listen(3000);
}
bootstrap();
