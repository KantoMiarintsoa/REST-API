import { forwardRef, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    async login(email: string, pass: string): Promise<any> {
        const user = await this.userService.findByEmail(email)

        if (!user) {
            throw new NotFoundException({
                message: "user not found"
            })
        }

        const passwordMatch = await this.userService.passwordMatch(user.password, pass)

        if (!user.isActive || !passwordMatch) {
            throw new UnauthorizedException();
        }

        const { password, ...userData } = user;


        const payload = { id: user.id, email: user.email }
        return {
            access_token: await this.jwtService.signAsync(payload, {
                secret: process.env.SECRET
            }),
            user: userData
        }
    }
}