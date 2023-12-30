import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConflictInterceptor } from 'src/common/errors/interceptors/conflict.interceptor';
import { NotFoundInterceptor } from 'src/common/errors/interceptors/not-found.interceptor';
import { UnauthorizedInterceptor } from 'src/common/errors/interceptors/unauthorized.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());

  await app.listen(3000);
}
bootstrap();
