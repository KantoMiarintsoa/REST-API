import { Body, Controller, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUSerDto } from 'src/users/dto/register.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthEntity } from './entities/auth.entity';

class LoginDto {
    @ApiProperty({ example: "kanto@gmail.com", description: "email of user" })
    email: string;

    @ApiProperty({ example: "kanto1234" })
    password: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private atuhService: AuthService
    ) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOkResponse({ type: AuthEntity })
    @ApiOperation({ summary: "login  with email and password" })
    @ApiBody({ type: LoginDto })
    async login(
        @Body() data: Record<string, any>) {
        return this.atuhService.login(data.email, data.password)
    }


}
