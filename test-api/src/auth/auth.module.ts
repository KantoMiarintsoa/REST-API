import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { CommonModule } from 'src/common/common.module';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { UniqueEmailConstraint } from 'src/validators/unique-email.validators';
import { ApiGuard } from './api.guard';

@Module({
  imports: [
    JwtModule.register({
      signOptions: {
        expiresIn: "24h"
      },
      secret: process.env.SECRET
    }),
    UsersModule],
  providers: [AuthService, AuthGuard, UniqueEmailConstraint, ApiGuard],
  controllers: [AuthController],
  exports: [AuthGuard, ApiGuard]
})
export class AuthModule { }
