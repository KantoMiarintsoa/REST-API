import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthModule } from './auth/auth.module';
import { ApiGuard } from './auth/api.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiGuard = app.select(AuthModule)
    .get(ApiGuard);

  app.useGlobalGuards(apiGuard)

  const config = new DocumentBuilder()
    .setTitle('api user')
    .setDescription('api nest for managing user')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
