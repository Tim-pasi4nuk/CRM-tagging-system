import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigModule, AppConfigService } from './config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigService = app.select(AppConfigModule).get(AppConfigService);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('crm-tagging-system')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('swagger', app, document);
  await app.listen(appConfigService.appPort);
}
bootstrap();
