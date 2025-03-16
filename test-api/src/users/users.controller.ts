import { Body, Controller, Get, Post, Req, UseGuards, Put, Delete, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUSerDto } from './dto/register.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDTO } from './dto/update-user-dto';
import { DesactiveUserDTO } from './dto/desactive-user.dto';
import { ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) { }

    @Post("register")
    @ApiOkResponse({ type: UserEntity })
    async register(
        @Body() data: RegisterUSerDto
    ) {
        return await this.userService.createUser(data)
    }

    @Get('me')
    @ApiOkResponse({ type: UserEntity })
    @ApiOperation({ summary: "read users" })
    @UseGuards(AuthGuard)
    async me(
        @Req() req: { user: { id: number } }
    ) {
        return await this.userService.findById(req.user.id)
    }

    @Put("update")
    @ApiOkResponse({ type: UserEntity })
    @ApiOperation({ summary: "update user with id" })
    @UseGuards(AuthGuard)
    async updateUSer(
        @Req() req: { user: { id: number } },
        @Body() data: UpdateUserDTO
    ) {
        return await this.userService.updateUser(req.user.id, data)
    }

    @Delete('delete')
    @ApiOkResponse({ type: UserEntity })
    @ApiOperation({ summary: "delete user with id" })
    @UseGuards(AuthGuard)
    async deleteUser(
        @Req() req: { user: { id: number } }
    ) {
        return await this.userService.deleteUser(req.user.id)
    }

    @Patch('desactive')
    @ApiOkResponse({ type: UserEntity })
    @ApiOperation({ summary: "deactive user with id" })
    @UseGuards(AuthGuard)
    async desactiveUser(
        @Body() data: DesactiveUserDTO,
        @Req() req: { user: { id: number } }
    ) {
        return await this.userService.desactiveUser(req.user.id, Boolean(data.isActive))
    }
}