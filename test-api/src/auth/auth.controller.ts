import { Body, Controller, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUSerDto } from 'src/users/dto/register.dto';

// @ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private atuhService: AuthService
    ) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    // @ApiOperation({ summary: "login page" })
    // @ApiBody({ type: RegisterUSerDto })
    async login(
        @Body() data: Record<string, any>) {
        return this.atuhService.login(data.email, data.password)
    }
}
