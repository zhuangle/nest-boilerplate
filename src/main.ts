import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './setup-sqagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
