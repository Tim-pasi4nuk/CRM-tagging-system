import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigModule, AppConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigService = app.select(AppConfigModule).get(AppConfigService);
  await app.listen(appConfigService.appPort);
}
bootstrap();
