import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class ApiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const apiKeyFromHeader = request.headers["x-api-key"];

    if (!apiKeyFromHeader) {
      return false;
    }

    const apiKeyFromEnv = process.env.API_KEY;

    if (!apiKeyFromEnv) {
      throw new Error("provide API_KEY in the environment variables");
    }


    return apiKeyFromEnv === apiKeyFromHeader;
  }
}
