import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { ValidatorsModule } from './validators/validators.module';

@Module({
  imports: [UsersModule, CommonModule, AuthModule, ValidatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
